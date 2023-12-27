import express from 'express';
import {
    getUser,
    getUserFriends,
    addRemoveFriend
} from '../controllers/users.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

/* GET routes */
router.get('/:id', verifyToken, getUser);
router.get('/:id/friends', verifyToken, getUserFriends);

/* UPDATE */
router.put('/:id/:friendId', verifyToken, addRemoveFriend);

export default router;