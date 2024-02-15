import React, { useContext, useEffect } from "react";
import AddNewCampaignBanner from "./AddNewCampaignBanner/AddNewCampaignBanner";
import CampaignBannersList from "./CampaignBannersList/CampaignBannersList";
import { AppContext } from "../../../App";

function CampaignBanner() {
  const { setIsShowAdminMenu } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);
  return (
    <div className="container">
      <AddNewCampaignBanner />
      <CampaignBannersList />
    </div>
  );
}

export default CampaignBanner;
