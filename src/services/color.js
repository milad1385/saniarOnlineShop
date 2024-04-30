import { getUserToken } from "../Utils/Funcs/utils";

const baseURL = `https://shoppingmilad.liara.run/colors`;

const createNewColor = async (data) => {
  try {
    const res = await fetch(`${baseURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `${getUserToken()}`,
      },
      body: JSON.stringify(data),
    });
    return res;
  } catch (err) {
    return err;
  }
};

const getAllColors = async (page) => {
  try {
    const res = await fetch(`${baseURL}?page=${page}`);
    console.log(res);
    return await res.json();
  } catch (err) {
    return err;
  }
};

const deleteColor = async (id) => {
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

export { createNewColor, getAllColors, deleteColor };
