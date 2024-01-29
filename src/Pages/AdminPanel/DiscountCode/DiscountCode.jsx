import React from "react";
import AddNewDiscountCode from "./AddNewDiscountCode/AddNewDiscountCode/AddNewDiscountCode";
import DiscountcodesList from "./DiscountcodesList/DiscountcodesList";

function DiscountCode() {
  return (
    <div className="container">
      <AddNewDiscountCode />
      <DiscountcodesList />
    </div>
  );
}

export default DiscountCode;
