"use client";
import styles from "./barAnalysis.module.css";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2006",
    year: 4000,
    sales: 2400,
    amt: 2400,
  },
  {
    name: "2005",
    year: 3000,
    sales: 1398,
    amt: 2210,
  },
  {
    name: "2004",
    year: 2000,
    sales: 9800,
    amt: 2290,
  },
  {
    name: "2003",
    year: 2780,
    sales: 3908,
    amt: 2000,
  },
  {
    name: "2002",
    year: 1890,
    sales: 4800,
    amt: 2181,
  },
  {
    name: "2001",
    year: 2390,
    sales: 3800,
    amt: 2500,
  },
  {
    name: "2000",
    year: 3490,
    sales: 4300,
    amt: 2100,
  },
];

const barAnalysis = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Generated Revenue</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="sales"
            fill="#008080"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="year"
            fill="#2ecc71"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default barAnalysis;
