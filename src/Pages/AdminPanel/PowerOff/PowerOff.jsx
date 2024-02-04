import React, { useContext, useEffect } from "react";
import AddPowerOff from "./AddPowerOff/AddPowerOff";
import { AppContext } from "../../../App";
import PowerOffList from "./PowerOffList/PowerOffList";

function PowerOff() {
  const { setIsShowAdminMenu } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);
  return (
    <div className="container">
      <AddPowerOff />
      <PowerOffList/>
    </div>
  );
}

export default PowerOff;
