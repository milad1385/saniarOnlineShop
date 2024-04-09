const baseURL = "http://localhost:3001/api/v1/wishlist";
import { getUserToken } from "./../Utils/Funcs/utils";
const addToWishList = async (productId) => {
  try {
    const res = await fetch(`${baseURL}/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `${getUserToken()}`,
      },
    });

    return res;
  } catch (err) {
    return err;
  }
};

const isExistProductWish = async (id) => {
  try {
    const res = await fetch(`${baseURL}/isExist/${id}`, {
      method: "GET",
      headers: {
        authorization: `${getUserToken()}`,
      },
    });

    return await res.json();
  } catch (err) {
    return err;
  }
};

const deleteWishList = async (id) => {
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

const getMainWishList = async () => {
  try {
    const res = await fetch(`${baseURL}/getMain`, {
      method: "GET",
      headers: {
        authorization: `${getUserToken()}`,
      },
    });

    return await res.json();
  } catch (err) {
    return err;
  }
};

export { addToWishList, isExistProductWish, deleteWishList, getMainWishList };
