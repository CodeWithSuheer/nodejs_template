import Router from 'express'
import { createData, deleteData, getAllData, updateData } from '../controllers/crudController.js';

const router = Router();

router.get('/getData', getAllData)
router.post('/createData', createData)
router.post('/updateData/:id', updateData)
router.post('/deleteData/:id', deleteData)


export { router as curdRouter }
