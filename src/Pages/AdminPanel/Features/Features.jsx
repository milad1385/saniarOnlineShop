import React, { useContext, useEffect } from "react";
import AddNewFeatures from "./AddNewFeature/AddNewFeatures";
import FeaturesList from "./FeaturesList/FeaturesList";
import { AppContext } from "../../../App";

function Features() {
  const {setIsShowAdminMenu } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);
  return (
    <>
      <AddNewFeatures/>
      <FeaturesList/>
    </>
  );
}

export default Features;
