import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import PageHeader from "../components/PageHeader";

const marks = [
  { name: "Assign 1", value: 60 },
  { name: "Assign 2", value: 57 },
  { name: "Assign 3", value: 60 },
  { name: "Assign 4", value: 60 },
  { name: "Assign 5", value: 60 },
  { name: "Assign 6", value: 60 },
  { name: "Assign 7", value: 60 },
  { name: "Assign 8", value: 60 },
];


function Statistics() {
  return (
    <>
      <PageHeader title="Statistics" />
      <div className="w-full text-xs md:text-sm px-5">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={marks}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fill="#0084d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default Statistics