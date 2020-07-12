import express from 'express';
import gradesController from '../controllers/grades.js';

const router = express.Router();

router.post('/grades/', gradesController.create);
router.get('/grades/', gradesController.findAll);
router.get('/grades/:id', gradesController.findOne);
router.put('/grades/:id', gradesController.update);
router.delete('/grades/:id', gradesController.remove);
router.delete('/grades/', gradesController.removeAll);

export default router;
