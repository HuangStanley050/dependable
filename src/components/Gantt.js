import React, { useContext } from "react";
import { Chart } from "react-google-charts";
import DataContext from "./DataContext";

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

const daysToMilliseconds = (days) => days * 24 * 60 * 60 * 1000;

const canBeIncluded = (story, stories) => true;

const processData = (stories) =>
  stories
    .filter((story) => canBeIncluded(story, stories))
    .map((story) => [
      story.key,
      story.key,
      story.epic,
      new Date(2020, 8, 1),
      null,
      daysToMilliseconds(story.estimatedDurationDays),
      100,
      [].join(","),
    ]);

const Gantt = () => {
  const rawData = useContext(DataContext);

  if (!rawData) {
    return null;
  }

  const data = processData(rawData);

  return (
    <Chart
      chartType="Gantt"
      data={[columns, ...data]}
      height={50 * data.length + 50}
      legendToggle
      options={{
        gantt: {
          trackHeight: 50,
          sortTasks: true,
          percentEnabled: false
        },
      }}
    />
  );
};

export default Gantt;
