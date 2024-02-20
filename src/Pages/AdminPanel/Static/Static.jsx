import React, { useContext, useEffect, useId } from "react";
import AdsList from "./AdsList/AdsList";
import LogoAndIcon from "./LogoAndIcon/LogoAndIcon";
import { AppContext } from "../../../App";
import ChangeAddress from "./ChangeAddress/ChangeAddress";
import ChangeTextFooter from "./ChangeTextFooter/ChangeTextFooter";
import AddNewAds from "./AdsList/AddNewAds";
import AddLogoAndFavIcon from "./AddLogoAndFavIcon/AddLogoAndFavIcon";
import PageTitle from "../../../Components/AdminPanel/PageTitle/PageTitle";

function Static() {
  const { setIsShowAdminMenu } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);
  return (
    <div className="container">
      <PageTitle key={useId()} main={'استاتیک'} desc={'تغییر محتوای'}/>
      <div className="space-y-10 pb-8">
        <ChangeTextFooter/>
        <ChangeAddress/>
        <AddNewAds/>
        <AdsList />
        <AddLogoAndFavIcon/>
        <LogoAndIcon/>
      </div>
    </div>
  );
}

export default Static;
