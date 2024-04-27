import React, { useContext, useEffect } from "react";
import { isLogin } from "../../Utils/Funcs/utils";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
function IsAdmin({ children }) {
  const context = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <>
      {!isLogin() || context?.userInfo.role !== "ADMIN" ? (
        navigate("/")
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default IsAdmin;
