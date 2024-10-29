import { Router } from 'express'; 
import {
    store,
    index,
    show,
    update,
    destroy
} from '../controllers/speciesController.js';

const router = Router(); 

router.post('/', store);
router.get('/', index);
router.get('/', show);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router; 