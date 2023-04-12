import React from "react";
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from "recharts";

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

const totalMarks = marks.reduce((acc, cur) => acc + cur.value, 0);
const data = marks.map((mark) => ({
  name: mark.name,
  value: mark.value,
  percentage: ((mark.value / totalMarks) * 100).toFixed(2) + "%",
}));

const average = [{ name: "Average Marks", value: totalMarks / marks.length }];

function Statistics() {
  return (
    <>
      <div className="w-full h-96 ">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              data={data}
              fill="#8884d8"
              label={({ percentage }) => `${percentage}`}
              cursor="pointer"
            />
            <Pie
              data={average}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#ff84d8"
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Statistics;
