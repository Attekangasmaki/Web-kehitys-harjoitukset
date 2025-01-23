//mock data  (tilapäistä testidataa)
const items = [
  {id: 1, name: 'Omena'},
  {id: 2, name: 'Appelsiini'},
  {id: 3, name: 'Porkkana'},
  {id: 4, name: 'Mandariini'},
];

const getItems = (req, res) => {
  res.json(items);
};

const getItemById = (req, res) => {
  console.log('getItemById', req.params.id);
  const item = items.find((item => item.id == req.params.id));
  console.log('Item found:', item)
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({message: "Item not found"});
  }
};

const updateItem = (req, res) =>{
  const itemId = req.params.id;
  const updatedData = req.body;

  if (!updatedData || !updatedData.id || !updatedData.name) {
    return res.status(400);
  }

  const itemIndex = items.findIndex(item => item.id == itemId);

  if (itemIndex !== -1) {
    items[itemIndex] = updatedData;
    res.status(200);
    return res.json({ "id": itemId, "name": req.body});

  } else {
    res.status(404).json({message : "Item not found"});
  }
};

const deleteItem = (req, res) =>{
  const itemId = req.params.id;

  const itemIndex = items.findIndex(item => item.id == itemId);

  if (itemIndex !== -1) {
    items.filter(item => item.id != itemId);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Item not found" });
  }
};



const addItem = (req, res) => {
  console.log('addItem request body', req.body);
  if (req.body.name) {

    const latestId = items[items.length-1].id

    const newItem = {id: latestId +1, name: req.body.name};
    items.push(newItem);
    res.status(201);
    return res.json({message: 'Item added.'});
  }
  res.status(400);
  return res.json({message: 'Request is missing name property.'});

};


// TODO: put & delete endpoints
// TODO: lisää users.js, ks. materiaali week 2

export {getItems, getItemById, addItem, updateItem, deleteItem};
