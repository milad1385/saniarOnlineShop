const baseURL = "http://localhost:3001/api/v1/user";
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
  const res = await fetch(`${baseURL}/getMe`, {
    headers: {
      authorization: `${token}`,
    },
  });

  return await res.json();
};

const sendPhoneOtpLogin = async (userInfo) => {
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

const getAllUsers = async (token) => {
  const res = await fetch(`${baseURL}/all`, {
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
      authorization: `${info.token}`,
    },
  });
  console.log(res);

  if (res.status === 404) {
    return { status: 404 };
  } else if (res.status === 403) {
    return { status: 403 };
  } else {
    return { status: 200 };
  }
};

const deleteUser = async (info) => {
  const res = await fetch(`${baseURL}/delete/${info.id}`, {
    method: "DELETE",
    headers: {
      authorization: `${info.token}`,
    },
  });

  console.log(res);
  return res.json();
};

const changeUserRole = async (info) => {
  console.log(info);
  const res = await fetch(`${baseURL}/change-role/${info.id}`, {
    method: "PUT",
    headers: {
      authorization: `${info.token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({ role: info.role }),
  });

  console.log(res);

  return res;
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
};
