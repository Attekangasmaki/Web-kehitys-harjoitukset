import express from 'express';
import {
  addUser,
  getUserById,
  getUsers,
  userLogin,
} from '../controllers/user-controller.js';
const userRouter = express.Router();

userRouter.route('/')
  .get(getUsers)
  .post(addUser);

userRouter.route('/:id')
.get(getUserById)




userRouter.post('/login', userLogin);

export default userRouter;
