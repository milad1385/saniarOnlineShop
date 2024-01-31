import React from "react";
import AddNewCampaignBanner from "./AddNewCampaignBanner/AddNewCampaignBanner";
import CampaignBannersList from "./CampaignBannersList/CampaignBannersList";

function CampaignBanner() {
  return (
    <div className="container">
        <AddNewCampaignBanner/>
        <CampaignBannersList/>
    </div>
  );
}

export default CampaignBanner;
