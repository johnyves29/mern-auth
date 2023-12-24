import express from 'express';

import { authUser } from '../contollers/userController.js';

const router = express.Router();

router.route('/auth').post(authUser);

export default router;