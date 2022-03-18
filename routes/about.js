import express from 'express'
import aboutController from '../controllers/aboutController'

const router = express.Router();

router.get('/about',aboutController.getAbouts);

export default router;