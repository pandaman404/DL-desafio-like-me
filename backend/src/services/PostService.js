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

export { getAllPosts, createNewPost };
