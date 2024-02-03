import React, { useContext, useEffect } from "react";
import AdvanceList from "./AdvanceList/AdvanceList";
import AddNewAdvance from "./AddNewAdvance/AddNewAdvance";
import { AppContext } from "../../../App";

function Advance() {
  const {setIsShowAdminMenu } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);
  return (
    <>
      <AddNewAdvance />
      <AdvanceList />
    </>
  );
}

export default Advance;
