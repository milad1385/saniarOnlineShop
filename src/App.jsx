import React, { createContext, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./Routes";

import Icons from "./Utils/Icons/Icons";
import { getUserToken } from "./Utils/Funcs/utils";
import { getUserInfo } from "./services/userApi";

export const AppContext = createContext(null);
function App() {
  const [isShowAdminMenu, setIsShowAdminMenu] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    getAndShowUserInfo();
  }, []);

  const getAndShowUserInfo = async () => {
    const token = getUserToken();
    if (token) {
      const { userInfo } = await getUserInfo(token);
      setUserInfo(userInfo);
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  const logout = () => {
    setIsLogin(false);
    setUserInfo({});
    localStorage.removeItem("token");
  };

  const Routes = useRoutes(routes);
  return (
    <>
      <Icons />
      <div>
        <AppContext.Provider
          value={{
            isShowAdminMenu,
            setIsShowAdminMenu,
            userInfo,
            setUserInfo,
            setIsLogin,
            isLogin,
            logout
          }}
        >
          {Routes}
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
