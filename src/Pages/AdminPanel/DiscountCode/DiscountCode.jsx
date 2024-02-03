import React, { useContext, useEffect } from "react";
import AddNewDiscountCode from "./AddNewDiscountCode/AddNewDiscountCode/AddNewDiscountCode";
import DiscountcodesList from "./DiscountcodesList/DiscountcodesList";
import { AppContext } from "../../../App";

function DiscountCode() {
  const {setIsShowAdminMenu } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);
  return (
    <div className="container">
      <AddNewDiscountCode />
      <DiscountcodesList />
    </div>
  );
}

export default DiscountCode;
