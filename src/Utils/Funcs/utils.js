const getUserToken = () => {
  const userToken = JSON.parse(localStorage.getItem("token"));
  return userToken ? userToken : false;
};

const isLogin = () => {
  const isLoginUser = JSON.parse(localStorage.getItem("token"));
  return isLoginUser ? true : false;
};

export { getUserToken, isLogin };
