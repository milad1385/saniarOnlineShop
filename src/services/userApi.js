const registerNewUser = async (formData) => {
  try {
    const res = await fetch(`http://localhost:3001/api/v1/user/register`, {
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
    const res = await fetch(`http://localhost:3001/api/v1/user/login`, {
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
    }
  } catch (err) {
    return err;
  }
};

const getUserInfo = async (token) => {
  const res = await fetch(`http://localhost:3001/api/v1/user/getMe`, {
    headers: {
      authorization: `${token}`,
    },
  });

  return await res.json();
};

const sendPhoneOtpLogin = async (userInfo) => {
  const res = await fetch(`http://localhost:3001/api/v1/user/send-code`, {
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
  const res = await fetch(`http://localhost:3001/api/v1/user/verify`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(infos),
  });

  const { accessToken } = await res.json();
  if (res.status === 200) {
    return { status: 200 , accessToken };
  } else if (res.status === 409) {
    return { status: 409 };
  } else if (res.status === 410) {
    return { status: 410 };
  } else {
    return { status: 404 };
  }
};

export {
  registerNewUser,
  handleLoginUser,
  getUserInfo,
  sendPhoneOtpLogin,
  verifyOtpCode,
};
