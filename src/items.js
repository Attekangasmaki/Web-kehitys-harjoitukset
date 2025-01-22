const items = [
  {"id": 1, "name": "Omena"},
  {"id": 2, "name": "Banaani"},
  {"id": 3, "name": "Päärynä"},
  {"id": 4, "name": "Appelsiini"}
  ];

  const getItems = (req, res) => {
    res.json(items);
  };
  export {getItems};
