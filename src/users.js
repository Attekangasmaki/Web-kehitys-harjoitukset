//figure out and add correct status codes and corresponding messages or data to the responses
//use POST method to create a new user
//use GET method to get a specific user
//create a dummy login endpoint using POST method
//check that the username and password match and return a success message if they do or an error message if they don't

const users = [
  {
    id: 1,
    username: "johndoe",
    password: "password1",
    email: "johndoe@example.com"
  },
  {
    id: 2,
    username: "janedoe",
    password: "password2",
    email: "janedoe@example.com"
  },
  {
    id: 3,
    username: "bobsmith",
    password: "password3",
    email: "bobsmith@example.com"
  }
];

const addUser = (req, res) => {
  console.log('addUser request body', req.body);
  const {username, password, email} = req.body;
  if (username && password && email) {
    const latestId = users[users.length-1].id
    const newUser = {id: latestId +1, username, password, email,};
    users.push(newUser);
    res.status(201);
    return res.json({message: 'User added.'});
  }
  res.status(400);
  return res.json({message: 'Request is missing some property.'});

};


const getUserById = (req, res) => {
  console.log('getUserById', req.params.id);
  const user = users.find((user => user.id == req.params.id));
  console.log('User found:', user)
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({message: "User not found"});
  }
};


const userLogin = (req, res) => {
  const {username, password} = req.body;
  if (!username) {
    return res.status(401).json({message: 'Username missing.'});
  }
  const user = users.find((user) => user.username === username);
  if (user && user.password === req.params.password) {
    res.json({ message: "Logged in successfully" });
  } else {
    res.status(404).json({ message: "Username or password incorrect" });
  }
};

export{addUser, getUserById, userLogin};

