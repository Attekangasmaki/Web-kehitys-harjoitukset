//figure out and add correct status codes and corresponding messages or data to the responses
//use POST method to create a new user
//use GET method to get a specific user
//create a dummy login endpoint using POST method
//check that the username and password match and return a success message if they do or an error message if they don't

import { getAllUsers, selectUserById, insertUser, selectUserByNameAndPassword} from "../models/user-model.js";

const getUsers = async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
};

const addUser = async (req, res) => {
  console.log('addUser request body', req.body);
  const {username, password, email} = req.body;
  if (username && password && email) {

    const newUser = {username, password, email,};
    const result = await insertUser(newUser);
    res.status(201);
    return res.json({message: 'User added.'});
  }
  res.status(400);
  return res.json({message: 'Request is missing some property.'});

};


const getUserById = async (req, res) => {
  console.log('getUserById', req.params.id);
  try{
    const user = await selectUserById(req.params.id);
    console.log('User found:', user)
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({message: "User not found"});
    }
  } catch (error) {
    res.status(500).json({message: error.message});
  }


};


const userLogin = async (req, res) => {
  const {username, password} = req.body;
  if (!username) {
    return res.status(401).json({message: 'Username missing.'});
  }
  const user = await selectUserByNameAndPassword(username, password);

  if (user) {
    res.json({message: 'login ok', user});
  } else {
    res.status(401).json({message: 'Bad username/password.'});
  }
};



export{addUser, getUserById, userLogin, getUsers};

