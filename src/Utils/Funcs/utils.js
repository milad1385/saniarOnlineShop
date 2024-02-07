const getUserToken = () => {
  const userToken = JSON.parse(localStorage.getItem("token"));
  return userToken ? userToken : false;
};


export { getUserToken };
