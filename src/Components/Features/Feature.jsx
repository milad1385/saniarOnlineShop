import React from "react";
import FeatureBox from "../FeatureBox/FeatureBox";
import useGetAll from "../../Hooks/AdminPanel/static/ads/useGetAll";

export default function Feature() {
  const { data: features } = useGetAll();
  return (
    <div className="container w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
      {features?.map((feature) => (
        <FeatureBox feature={feature} />
      ))}
    </div>
  );
}
