import apiInstance from './client';

const client = apiInstance();

const getSearchResult = async (keyword: any, category: any) => {
  try {
    if (keyword === undefined) {
      keyword = '';
    }
    if (category === undefined) {
      category = '';
    }
    const res = await client.get(`/books/search?keyword=${keyword}&category=${category}&size=1000&page=0`);

    console.log('res, keyword, category', res, keyword, category);

    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const searach = { getSearchResult };
export default searach;
