import { StatusCodes } from 'http-status-codes';
import { createNewPost, getAllPosts } from '../services/PostService.js';

const getPosts = async (_, res) => {
  const posts = await getAllPosts();
  return res.status(StatusCodes.OK).json({ posts });
};

const createPost = async (req, res) => {
  const { titulo, img, descripcion, likes } = req.body;

  if (!titulo || !img || !descripcion || !likes) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: 'Post invalido',
    });
  }

  await createNewPost({ titulo, img, descripcion, likes });
  return res.status(StatusCodes.OK).json({ message: 'Post creado exitosamente!' });
};

export { getPosts, createPost };
