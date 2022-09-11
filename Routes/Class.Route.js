import express from 'express'
import controller from '../Controllers/Class.Controller.js'

const router = express.Router();
//console.log(controller)

router.get('/', controller.getAll);
router.get('/get/:id', controller.getById);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router.delete('/:id', controller.deleteById);

export default router;