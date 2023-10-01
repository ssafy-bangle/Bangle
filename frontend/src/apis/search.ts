import apiInstance from './client';

const client = apiInstance();

const getSearchResult = async (keyword: any, category: any) => {
  try {
    const res = await client.get(`/books/search?keyword=${keyword}&category=${category}`);
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const searach = { getSearchResult };
export default searach;
