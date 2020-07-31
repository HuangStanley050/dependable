import React, { useContext } from "react";
import { Chart } from "react-google-charts";
import DataContext from "./DataContext";
import canBeIncluded from "../utils/canBeIncluded";
import daysToMilliseconds from "../utils/daysToMilliseconds";
import getDependencies from "../utils/getDependencies";

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

const processData = (stories, sourceProjectKey) => {
  const sourceStories = stories
    .filter((story) => story.project.key === sourceProjectKey)
    .filter((story) => canBeIncluded(story, stories, sourceProjectKey));

  const dependencies = sourceStories.flatMap((story) =>
    getDependencies(story.dependencies, stories)
  );

  return [...sourceStories, ...dependencies].map((story) => [
    story.key,
    story.key,
    story.epic,
    story.sprint?.startDate && new Date(story.sprint.startDate),
    story.sprint?.endDate && new Date(story.sprint.endDate),
    story.estimatedDurationDays &&
      daysToMilliseconds(story.estimatedDurationDays),
    100,
    story.dependencies.join(","),
  ]);
};

const Gantt = () => {
  const rawData = useContext(DataContext);
  if (!rawData) {
    return null;
  }

  const data = processData(rawData, "SSJ");

  if (data.length === 0) {
    return <p>No stories are able to be scheduled!</p>;
  }

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
          percentEnabled: false,
          innerGridTrack: { fill: "#fff" },
          innerGridDarkTrack: { fill: "#fff" },
        },
      }}
    />
  );
};

export default Gantt;
