import { getUserToken } from "../Utils/Funcs/utils";

const baseURL = `https://shoppingmilad.liara.run/menu`;

const createMenu = async (data) => {
  try {
    const res = await fetch(`${baseURL}`, {
      method: "POST",
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

const getAllMenus = async () => {
  try {
    const res = await fetch(`${baseURL}`);
    const menus = await res.json();
    return menus;
  } catch (err) {
    return err;
  }
};

const getNavbarMenu = async () => {
  try {
    const res = await fetch(`${baseURL}/all`);
    const menus = await res.json();

    return menus;
  } catch (err) {
    return err;
  }
};

export { createMenu, getAllMenus, getNavbarMenu };
