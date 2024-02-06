import React, { createContext, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./Routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Icons from "./Utils/Icons/Icons";
export const AppContext = createContext(null);
function App() {
  const [isShowAdminMenu , setIsShowAdminMenu] = useState(false);
  const [userInfo , setUserInfo] = useState({});
  const [isLogin , setIsLogin] = useState(null);
  const queryClient = new QueryClient();

  useEffect(()=>{
    const theme = localStorage.getItem('theme');
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  },[])

  const Routes = useRoutes(routes);
  return (
    <>
      <Icons/>
      <div>
        <QueryClientProvider client={queryClient}>
          <AppContext.Provider value={{isShowAdminMenu , setIsShowAdminMenu , userInfo , setUserInfo , setIsLogin , isLogin}}>
            {Routes}
          </AppContext.Provider>
          <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
