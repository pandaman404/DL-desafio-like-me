import DB from '../db/db.js';

const getAllPosts = async () => {
  const { rows } = await DB.query('SELECT * FROM posts');
  return rows;
};

const createNewPost = async ({ titulo, img, descripcion, likes }) => {
  const query = 'INSERT INTO posts VALUES(DEFAULT, $1, $2, $3, $4)';
  const values = [titulo, img, descripcion, likes];
  await DB.query(query, values);
  return null;
};

const deletePostFromDB = async (id) => {
  const query = 'DELETE FROM posts WHERE id = $1';
  const values = [id];
  const { rowCount } = await DB.query(query, values);
  return rowCount > 0;
};

const addLikeInPost = async (id) => {
  const query = 'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING likes';
  const values = [id];
  const { rowCount } = await DB.query(query, values);
  return rowCount > 0;
};

export { getAllPosts, createNewPost, deletePostFromDB, addLikeInPost };
