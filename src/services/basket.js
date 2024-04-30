import { getUserToken } from "../Utils/Funcs/utils";
const baseURL = "https://shoppingmilad.liara.run/basket";

const addToBasket = async (data) => {
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

const getMainBasket = async (id) => {
  try {
    const res = await fetch(`${baseURL}/main/${id}`, {
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

const getUserBasket = async () => {
  try {
    const res = await fetch(`${baseURL}/getMain/user`, {
      headers: {
        authorization: `${getUserToken()}`,
      },
    });

    return await res.json();
  } catch (err) {
    return err;
  }
};

const increaseItem = async (id) => {
  try {
    const res = await fetch(`${baseURL}/increase/${id}`, {
      method: "PUT",
      headers: {
        authorization: `${getUserToken()}`,
      },
    });

    return await res.json();
  } catch (err) {
    return err;
  }
};

const decreaseItem = async (id) => {
  try {
    const res = await fetch(`${baseURL}/decrease/${id}`, {
      method: "PUT",
      headers: {
        authorization: `${getUserToken()}`,
      },
    });

    return await res.json();
  } catch (err) {
    return err;
  }
};

const deleteBasketItem = async (id) => {
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

export {
  addToBasket,
  getMainBasket,
  increaseItem,
  decreaseItem,
  deleteBasketItem,
  getUserBasket
};
