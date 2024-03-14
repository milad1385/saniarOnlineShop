import { getUserToken } from "../Utils/Funcs/utils";

const baseURL = "http://localhost:3001/api/v1/contact";

const sendNewContact = async (body) => {
  try {
    const res = await fetch(`${baseURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return res;
  } catch (err) {
    return err;
  }
};

const getAllContact = async () => {
  try {
    const res = await fetch(`${baseURL}`);

    return await res.json();
  } catch (err) {
    return err;
  }
};

const deleteContact = async (id) => {
  try {
    const res = await fetch(`${baseURL}/${id}`, { method: "DELETE" });

    return res;
  } catch (err) {}
};

const sendAnswerToMsg = async (data) => {
  try {
    const res = await fetch(`${baseURL}/answer`, {
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

export { sendNewContact, getAllContact, deleteContact, sendAnswerToMsg };
