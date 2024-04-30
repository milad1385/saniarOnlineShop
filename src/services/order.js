import { getUserToken } from "../Utils/Funcs/utils";
const baseURL = `https://shoppingmilad.liara.run/order`;

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

const getAllOrders = async () => {
  try {
    const res = await fetch(`${baseURL}/all`);
    return await res.json();
  } catch (err) {
    return err;
  }
};

const acceptOrder = async (info) => {
  try {
    const res = await fetch(`${baseURL}/accept/${info.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: info.email }),
    });
    return await res.json();
  } catch (err) {
    return err;
  }
};

const handOverOrder = async (info) => {
  try {
    const res = await fetch(`${baseURL}/handover/${info.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: info.email }),
    });
    return await res.json();
  } catch (err) {
    return err;
  }
};
export {
  createOrder,
  getOrders,
  getMainOrderDetail,
  getAllOrders,
  acceptOrder,
  handOverOrder,
};
