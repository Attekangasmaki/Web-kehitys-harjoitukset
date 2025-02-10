import {getAllEntries, selectEntryById} from "../models/entries-model.js";

const getEntries = async (req, res) => {
  const users = await getAllEntries();
  res.json(users);
};

const getEntryById = async (req, res) => {
  console.log('getUserById', req.params.id);
  try{
    const entry = await selectEntryById(req.params.id);
    console.log('Entry found:', entry)
    if (entry) {
      res.json(entry);
    } else {
      res.status(404).json({message: "Entry not found"});
    }
  } catch (error) {
    res.status(500).json({message: error.message});
  }


};

export{getEntries, getEntryById};
