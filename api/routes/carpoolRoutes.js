import express from 'express';
import { getAllCarpools, addCarpool, searchCarpools } from '../controllers/carpoolController.js';

const router = express.Router();

router.post('/upload', addCarpool);
router.get('/search', searchCarpools);
router.get('/', getAllCarpools);

export default router;
