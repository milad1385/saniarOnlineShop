import { getUserToken } from "../Utils/Funcs/utils";

const baseURL = `https://shoppingmilad.liara.run/static`;

const createFooterText = async (text) => {
  try {
    const res = await fetch(`${baseURL}/footer`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    });

    return res;
  } catch (err) {
    return err;
  }
};

const getFooterText = async () => {
  try {
    const res = await fetch(`${baseURL}/footer`);
    return await res.json();
  } catch (err) {}
};

const createSiteAdress = async (data) => {
  try {
    const res = await fetch(`${baseURL}/address`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res;
  } catch (err) {
    return err;
  }
};

const getAddresses = async () => {
  try {
    const res = await fetch(`${baseURL}/address`);
    return await res.json();
  } catch (err) {
    return err;
  }
};

const createNewAds = async (data) => {
  try {
    const res = await fetch(`${baseURL}/ads`, {
      method: "POST",
      body: data,
    });

    return res;
  } catch (err) {
    return err;
  }
};

const getAllAds = async () => {
  try {
    const res = await fetch(`${baseURL}/ads`);

    return await res.json();
  } catch (err) {
    return err;
  }
};

const deleteAds = async (id) => {
  try {
    const res = await fetch(`${baseURL}/ads/${id}`, {
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
  createFooterText,
  getFooterText,
  createSiteAdress,
  getAddresses,
  createNewAds,
  getAllAds,
  deleteAds
};
