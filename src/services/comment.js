import { getUserToken } from "../Utils/Funcs/utils";

const baseURL = `https://shoppingmilad.liara.run/comments`;

const createNewComment = async (data) => {
  try {
    const res = await fetch(`${baseURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: getUserToken(),
      },
      body: JSON.stringify(data),
    });

    console.log(res);
    return res;
  } catch (err) {
    return err;
  }
};

const getAllComments = async () => {
  try {
    const res = await fetch(`${baseURL}`);
    return await res.json();
  } catch (err) {
    return err;
  }
};

const setAcceptOrDeclineComment = async (id, status) => {
  try {
    const res = await fetch(`${baseURL}/setAcceptOrDecline/${id}/${status}`, {
      method: "PUT",
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

const deleteComment = async (id) => {
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

const editCommentBody = async (body, id) => {
  try {
    const res = await fetch(`${baseURL}/editText/${id}`, {
      method: "PUT",
      headers: {
        authorization: `${getUserToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: body }),
    });

    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getMainComments = async () => {
  try {
    const res = await fetch(`${baseURL}/getMain`, {
      headers: {
        authorization: `${getUserToken()}`,
      },
    });

    const comments = await res.json();
    return comments;
  } catch (err) {
    return err;
  }
};

export {
  createNewComment,
  getAllComments,
  setAcceptOrDeclineComment,
  deleteComment,
  editCommentBody,
  getMainComments
};
