import React, { useContext, useEffect } from "react";
import AddNewColor from "./AddNewColor/AddNewColor";
import ColorsList from "./ColorsList/ColorsList";
import { AppContext } from "../../../App";

function Colors() {
  const {setIsShowAdminMenu } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);
  return (
    <div className="container">
      <AddNewColor/>
      <ColorsList/>
    </div>
  );
}

export default Colors;
