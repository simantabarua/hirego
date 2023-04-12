import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const marks = [
  { name: "Assignment 1", value: 60 },
  { name: "Assignment 2", value: 57 },
  { name: "Assignment 3", value: 60 },
  { name: "Assignment 4", value: 60 },
  { name: "Assignment 5", value: 60 },
  { name: "Assignment 6", value: 60 },
  { name: "Assignment 7", value: 60 },
  { name: "Assignment 8", value: 60 },
];

function AreaChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={marks}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default AreaChartComponent;
