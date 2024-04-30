import { getUserToken } from "../Utils/Funcs/utils";

const baseURL = "https://shoppingmilad.liara.run/articles";

const createNewArticle = async (data) => {
  try {
    const res = await fetch(`${baseURL}`, {
      method: "POST",
      headers:{
        authorization : `${getUserToken()}`
      },
      body: data,
    });

    return res;
  } catch (err) {
    return err;
  }
};

const getArticles = async (page) => {
  try {
    const res = await fetch(`${baseURL}?page=${page}`);

    return await res.json();
  } catch (err) {}
};

const getArticlesWithOutPagination = async () => {
  try {
    const res = await fetch(`${baseURL}/getAll`);
    return await res.json();
  } catch (err) {
    return err;
  }
};

const getMainArticle = async (articleName) => {
  try {
    const res = await fetch(`${baseURL}/${articleName}`);
    return await res.json();
  } catch (err) {
    return err;
  }
};

export { createNewArticle, getArticles, getArticlesWithOutPagination , getMainArticle };
