import React from "react";
import FeatureBox from "../FeatureBox/FeatureBox";

export default function Feature() {
  return (
    <div className="container w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
      <FeatureBox title={'ضمانت بازگشت وجه'} desc="در صورت عدم رضایت" image={'history.png'}/>
      <FeatureBox title={'تضمین قیمت'} desc={'کمترین قیمت بازار'} image={'credit-card.png'}/>
      <FeatureBox title={'ارسال سریع'} desc={'امن و مطمئن'} image={'fast.png'}/>
      <FeatureBox title={'پشتیبانی عالی'} desc={'24 ساعت شبانه روز'} image={'headphone.png'}/>
      <FeatureBox title={'اصالت کالا'} desc={'تضمین اصالت کالا'} image={'badge.png'}/>
    </div>
  );
}
