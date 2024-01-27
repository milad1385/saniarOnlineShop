import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Line,
  Tooltip,
  CartesianGrid,
  Area
} from "recharts";



export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart  mt-8 p-2 bg-white rounded-md">
      <h3 className="chartTitle font-DanaDemiBold mb-2 text-xl">{title}</h3>
      <ResponsiveContainer width="100%" aspect={3.5}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#0335ff" className={'relative z-10'} />
          <Line type="monotone" dataKey={dataKey} stroke="#0335ff" className={'relative z-10'} />
          <Tooltip className={'relative z-10'}/>
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
