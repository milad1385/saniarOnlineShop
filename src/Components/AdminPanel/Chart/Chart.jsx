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
          <XAxis dataKey="name" stroke="#0335ff" />
          <Line type="monotone" dataKey={dataKey} stroke="#0335ff" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </ResponsiveContainer>
    </div>
  );
}
