import { getUserToken } from "../Utils/Funcs/utils";

const baseURL = `http://localhost:3001/api/v1/category`;

const createNewCategory = async (data) => {
  try {
    const res = await fetch(`${baseURL}`, {
      method: "POST",
      body: data,
    });

    return res;
  } catch (err) {
    return err;
  }
};

const getAllCategory = async (page) => {
  try {
    const res = await fetch(`${baseURL}?page=${page}`);

    return await res.json();
  } catch (err) {
    return err;
  }
};

const deleteCategory = async (id) => {
  try {
    const res = await fetch(`${baseURL}/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `${getUserToken()}`,
      },
    });

    return res;
  } catch (err) {
    return err;
  }
};

const updateCategory = async (info) => {
  try {
    const res = await fetch(`${baseURL}/${info.id}`, {
      method: "PUT",
      headers: {
        authorization: `${info.token}`,
      },
      body: info.data,
    });

    return res;
  } catch (err) {
    return err;
  }
};

export { createNewCategory, getAllCategory, deleteCategory, updateCategory };
