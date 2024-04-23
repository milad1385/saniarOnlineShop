import { getUserToken } from "../Utils/Funcs/utils";
const baseURL = `http://localhost:3001/api/v1/order`;

const createOrder = async (data) => {
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

const getOrders = async () => {
  try {
    const res = await fetch(`${baseURL}`, {
      headers: {
        authorization: `${getUserToken()}`,
      },
    });

    return await res.json();
  } catch (err) {
    return err;
  }
};

const getMainOrderDetail = async (id) => {
  try {
    const res = await fetch(`${baseURL}/get-main/${id}`);
    return await res.json();
  } catch (err) {
    return err;
  }
};

export { createOrder, getOrders, getMainOrderDetail };
