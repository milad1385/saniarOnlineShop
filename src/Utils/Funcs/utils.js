const getUserToken = () => {
  const userToken = JSON.parse(localStorage.getItem("token"));
  return userToken ? userToken : false;
};

const getSearchParam = (key) => {
  const urlSearchParam = new URLSearchParams(window.location.search).get(key);
  return urlSearchParam ? urlSearchParam : null;
};

const getAllSearchParam = (key) => {
  const urlSearchParam = new URLSearchParams(window.location.search).getAll(
    key
  );
  return urlSearchParam ? urlSearchParam : null;
};

const isLogin = () => {
  const isLoginUser = JSON.parse(localStorage.getItem("token"));
  return isLoginUser ? true : false;
};

export { getUserToken, isLogin, getSearchParam, getAllSearchParam };
