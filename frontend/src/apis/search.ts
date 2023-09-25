import apiInstance from './client';

const client = apiInstance();

const getSearchResultByKeyword = async (keyword: string) => {
  try {
    const res = await client.get('/book/search');
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const searach = { getSearchResultByKeyword };
export default searach;
