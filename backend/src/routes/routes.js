import { Router } from 'express';
import { createPost, deletePost, getPosts, updateLikesInPost } from '../controllers/PostsController.js';
import { asyncHandler } from '../middlewares/AsyncHandler.js';

const router = Router();

router.get('/posts', asyncHandler(getPosts));
router.post('/posts', asyncHandler(createPost));
router.put('/posts/like/:id', asyncHandler(updateLikesInPost));
router.delete('/posts/:id', asyncHandler(deletePost));

export default router;
