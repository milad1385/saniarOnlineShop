import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Line,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart  mt-8 p-2 bg-white rounded-md">
      <h3 className="chartTitle font-DanaDemiBold mb-2 text-base md:text-xl">{title}</h3>
      <ResponsiveContainer
        width="100%"
        aspect={window.innerWidth < 410 ? 1.75 : 4.5}
      >
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#0335ff"
            className={"relative z-10 text-[0px] md:text-base"}
          />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#0335ff"
            className={"relative z-10"}
          />
          <Tooltip className={"relative z-10"} />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
