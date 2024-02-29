import { getUserToken } from "../Utils/Funcs/utils";

const baseURL = `http://localhost:3001/api/v1/features`;

const createNewFeature = async (data) => {
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

const getAllFeatures = async (page) => {
  try {
    const res = await fetch(`${baseURL}?page=${page}`);
    return await res.json();
  } catch (err) {
    return err;
  }
};

const deleteFeature = async (id) => {
  try {
    const res = await fetch(`${baseURL}/${id}`, {
      method: "DELETE",
    });

    return res;
  } catch (err) {
    return err;
  }
};

export { createNewFeature, getAllFeatures, deleteFeature };
