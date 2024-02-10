import React from "react";
import { isLogin } from "../../Utils/Funcs/utils";
import { useNavigate } from "react-router-dom";
function IsLogin({ children }) {
  const navigate = useNavigate();
  return <>{isLogin() ? navigate("/") : <>{children}</>}</>;
}

export default IsLogin;
