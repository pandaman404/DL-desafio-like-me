import { Router } from 'express';
import { createPost, getPosts } from '../controllers/PostController.js';
import { asyncHandler } from '../middlewares/AsyncHandler.js';

const router = Router();

router.get('/posts', asyncHandler(getPosts));
router.post('/posts', asyncHandler(createPost));

export default router;
