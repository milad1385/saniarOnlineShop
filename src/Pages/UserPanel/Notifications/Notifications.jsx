import React from "react";
import PageTitle from "../../../Components/UserPanel/PageTitle/PageTitle";
import Notification from "../../../Components/UserPanel/Notification/Notification";

function Notifications() {
  return (
    <div>
      <PageTitle title="اعلان ها و اطلاعیه ها" icon="earth" />
      <div className="bg-white shadow rounded-md px-[18px] py-4 mt-6 space-y-5">
        <Notification/>
        <Notification/>
        <Notification/>
      </div>
    </div>
  );
}

export default Notifications;
