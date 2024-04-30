import { getUserToken } from "../Utils/Funcs/utils";

const baseURL = `https://shoppingmilad.liara.run/slider`;
const createNewSlider = async (info) => {
  try {
    const res = await fetch(`${baseURL}`, {
      method: "POST",
      headers: {
        authorization: `${getUserToken()}`,
      },
      body: info,
    });

    return res;
  } catch (err) {
    return err;
  }
};

const getAllSliders = async () => {
  try {
    const res = await fetch(`${baseURL}/all`);

    return await res.json();
  } catch (err) {
    return err;
  }
};

const deleteSlider = async (id) => {
  try {
    const res = await fetch(`${baseURL}/${id}`, {
      method: "DELETE",
    });

    return res;
  } catch (err) {
    return err;
  }
};

const acceptOrDeclineSlider = async (info) => {
  try {
    const res = await fetch(
      `${baseURL}/accept-decline/${info.id}/${info.status}`,
      {
        method: "PUT",
      }
    );

    return res;
  } catch (err) {
    return err;
  }
};

const getActiveSlider = async () => {
  try {
    const res = await fetch(`${baseURL}/active`);
    return await res.json();
  } catch (err) {
    return err;
  }
};

const editSlider = async (info) => {
  console.log(info);
  try {
    const res = await fetch(`${baseURL}/edit/${info.id}`, {
      method: "PUT",
      body: info.data,
    });

    return res;
  } catch (err) {
    return err;
  }
};

export {
  createNewSlider,
  getAllSliders,
  deleteSlider,
  acceptOrDeclineSlider,
  getActiveSlider,
  editSlider,
};
