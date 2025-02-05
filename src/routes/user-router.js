import express from 'express';
import {
  addUser,
  getUserById,
  getUsers,
  userLogin,
} from '../controllers/user-controller.js';
const userRouter = express.Router();

userRouter.route('/')
  .get('/', getUsers)
  .post('/api/users/', addUser)
  .get('/api/users/:id', getUserById)
  .post('/api/users/', userLogin);



export default userRouter;
