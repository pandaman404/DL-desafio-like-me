import { StatusCodes } from 'http-status-codes';
import { addLikeInPost, createNewPost, deletePostFromDB, getAllPosts } from '../services/PostService.js';

const getPosts = async (_, res) => {
  const posts = await getAllPosts();
  return res.status(StatusCodes.OK).json({ posts });
};

const createPost = async (req, res) => {
  const { titulo, img, descripcion, likes } = req.body;

  if (!titulo || !img || !descripcion) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: 'Post invalido',
    });
  }

  await createNewPost({ titulo, img, descripcion, likes: !likes ? 0 : likes });
  return res.status(StatusCodes.OK).json({ message: 'Post creado exitosamente!' });
};

const deletePost = async (req, res) => {
  const id = Number(req.params.id);
  const result = await deletePostFromDB(id);

  if (!result) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: 'Post no encontrado' });
  }

  return res.status(StatusCodes.OK).json({ message: 'Post eliminado exitosamente!' });
};

const updateLikesInPost = async (req, res) => {
  const id = Number(req.params.id);
  const result = await addLikeInPost(id);

  if (!result) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: 'Post no encontrado' });
  }

  return res.status(StatusCodes.OK).json({ message: 'Post actualizado exitosamente!' });
};

export { getPosts, createPost, deletePost, updateLikesInPost };
