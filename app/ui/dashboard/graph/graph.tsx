"use client";
import styles from "./graph.module.css";

import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    sales: 4000,
    profit: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    sales: 3000,
    profit: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    sales: 2000,
    profit: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    sales: 2780,
    profit: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    sales: 1890,
    profit: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    sales: 2390,
    profit: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    sales: 3490,
    profit: 4300,
    amt: 2100,
  },
];

const graph = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Expected Sales Margin</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          layout="vertical"
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, "dataMax + 1000"]} />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Line dataKey="profit" stroke="#e74c3c" />
          <Line dataKey="sales" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default graph;
