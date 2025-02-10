import express from 'express';
import {
  getEntries,
  getEntryById,
} from '../controllers/entries-controller.js';
const entriesRouter = express.Router();

entriesRouter.route('/')
  .get(getEntries)


entriesRouter.route('/:id')
.get(getEntryById)



export default entriesRouter;


