import React from "react";
import { Chart } from "react-google-charts";
import data from "../mock/data";

const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "string", label: "Resource" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

function Gantt() {
  return (
    <Chart
      chartType="Gantt"
      data={[columns, ...data]}
      height="110%"
      legendToggle
    />
  );
}

export default Gantt;
