import React from "react";

function PageTitle({main , desc}) {
  return (
    <h3 className="font-Lalezar text-xl md:text-3xl mt-10 mb-6">
      {desc} <span className="text-blue-600">{main}</span>
    </h3>
  );
}

export default PageTitle;
