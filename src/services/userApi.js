import { getUserToken } from "../Utils/Funcs/utils";

const baseURL = "https://shoppingmilad.liara.run/user";
const registerNewUser = async (formData) => {
  try {
    const res = await fetch(`${baseURL}/register`, {
      method: "POST",
      body: formData,
    });
    if (res.status === 404) {
      return { status: 404 };
    } else if (res.status === 200 || res.status === 202) {
      return { status: 200, infos: await res.json() };
    } else if (res.status === 409) {
      return { status: 409 };
    }
  } catch (err) {
    return err;
  }
};

const handleLoginUser = async (userInfo) => {
  try {
    const res = await fetch(`${baseURL}/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    console.log(res);

    const { info } = await res.json();
    if (res.status === 404) {
      return { status: 404 };
    } else if (res.status === 200 || res.status === 202) {
      return { status: 200, infos: info };
    } else {
      return { status: 403 };
    }
  } catch (err) {
    return err;
  }
};

const getUserInfo = async (token) => {
  try {
    const res = await fetch(`${baseURL}/getMe`, {
      headers: {
        authorization: `${token}`,
      },
    });

    return await res.json();
  } catch (err) {
    return err;
  }
};

const sendPhoneOtpLogin = async (userInfo) => {
  try {
    const res = await fetch(`${baseURL}/send-code`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const { time } = await res.json();

    if (res.status === 404) {
      return { status: 404 };
    } else if (res.status === 200) {
      return { status: 200, time };
    }
  } catch (err) {
    return err;
  }
};

const verifyOtpCode = async (infos) => {
  const res = await fetch(`${baseURL}/verify`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(infos),
  });

  const { accessToken } = await res.json();
  if (res.status === 200) {
    return { status: 200, accessToken };
  } else if (res.status === 409) {
    return { status: 409 };
  } else if (res.status === 410) {
    return { status: 410 };
  } else {
    return { status: 404 };
  }
};

const getAllUsers = async (token, page) => {
  const res = await fetch(`${baseURL}/all?page=${page}`, {
    headers: {
      authorization: `${token}`,
    },
  });
  return await res.json();
};

const banUser = async (info) => {
  const res = await fetch(`${baseURL}/ban/${info.phone}`, {
    method: "POST",
    headers: {
      authorization: `${getUserToken()}`,
    },
  });

  if (res.status === 404) {
    return { status: 404 };
  } else if (res.status === 403) {
    return { status: 403 };
  } else {
    return { status: 200 };
  }
};

const deleteUser = async (id) => {
  try {
    const res = await fetch(`${baseURL}/delete/${id}`, {
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

const changeUserRole = async (info) => {
  try {
    const res = await fetch(`${baseURL}/change-role/${info.id}`, {
      method: "PUT",
      headers: {
        authorization: `${getUserToken()}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ role: info.role }),
    });

    return res;
  } catch (err) {
    return err;
  }
};

const editUser = async (info) => {
  try {
    const res = await fetch(`${baseURL}/edit/${info.id}`, {
      method: "PUT",
      headers: {
        authorization: `${getUserToken()}`,
      },
      body: info.body,
    });
    return res;
  } catch (err) {
    return err;
  }
};

const getLastUser = async (q) => {
  try {
    const res = await fetch(`${baseURL}/registerNow?q=${q}`);

    return await res.json();
  } catch (err) {
    return err;
  }
};

const getPanelInfo = async () => {
  try {
    const res = await fetch(`${baseURL}/panel/info`, {
      headers: {
        authorization: `${getUserToken()}`,
      },
    });

    return await res.json();
  } catch (err) {
    return err;
  }
};

export {
  registerNewUser,
  handleLoginUser,
  getUserInfo,
  sendPhoneOtpLogin,
  verifyOtpCode,
  getAllUsers,
  banUser,
  deleteUser,
  changeUserRole,
  editUser,
  getLastUser,
  getPanelInfo
};
