import { getUserToken } from "../Utils/Funcs/utils";

const baseURL = "http://localhost:3001/api/v1/discount";

const createNewDiscountCode = async (data) => {
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

const getDiscountCode = async () => {
  try {
    const res = await fetch(`${baseURL}`);
    const discount = await res.json();

    return discount;
  } catch (err) {
    return err;
  }
};

const deleteDiscountCode = async (id) => {
  try {
    const res = await fetch(`${baseURL}/${id}`, {
      method: "DELETE",
    });

    return res;
  } catch (err) {
    return err;
  }
};

export { createNewDiscountCode, getDiscountCode, deleteDiscountCode };
