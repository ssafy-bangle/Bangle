import apiInstance from './client';

const client = apiInstance();

const getStat = async () => {
  try {
    const res = await client.get(`/stat`);
    return res.data.data;
  } catch (e) {
    throw new Error('');
  }
};

const getAuthorInfo = async (authorId: number) => {
  try {
    const res = await client.get(`/authors/${authorId}`);
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const subscribeAuthor = async (authorId: number) => {
  try {
    const res = await client.post(`/readers/subscribe/${authorId}`);
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const getSubscribeAuthor = async () => {
  try {
    const res = await client.get('/readers/subscribe/list');
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const postIntroduction = async (introduction: string) => {
  try {
    const res = await client.post('/authors', { introduction });
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const getAuthorMyInfo = async () => {
  try {
    const res = await client.get('/authors');
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const author = { getAuthorMyInfo, postIntroduction, getStat, getAuthorInfo, subscribeAuthor, getSubscribeAuthor };
export default author;
