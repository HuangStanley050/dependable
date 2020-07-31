import React, { useContext } from "react";
import { Chart } from "react-google-charts";
import naturalCompare from "natural-compare";
import DataContext from "./DataContext";
import canBeIncluded from "../utils/canBeIncluded";
import daysToMilliseconds from "../utils/daysToMilliseconds";
import getDependencies from "../utils/getDependencies";
import { Column } from "@iag-packages/chroma-react/lib/layouts";

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
    .filter((story) => canBeIncluded(story, stories, sourceProjectKey))
    .sort((story1, story2) => naturalCompare(story1.key, story2.key));

  const dependencies = sourceStories
    .flatMap((story) => getDependencies(story.dependencies, stories))
    .sort((story1, story2) => naturalCompare(story1.key, story2.key));

  return [...sourceStories, ...dependencies].map((story) => [
    story.key,
    `${story.key} - ${story.title}`,
    story.project.key,
    story.sprint?.startDate && new Date(story.sprint.startDate),
    story.sprint?.endDate && new Date(story.sprint.endDate),
    story.estimatedDurationDays &&
      daysToMilliseconds(
        story.points ? story.points * 5 : story.estimatedDurationDays
      ),
    100,
    story.dependencies.join(","),
  ]);
};

const Gantt = ({ sourceProjectKey }) => {
  const rawData = useContext(DataContext);
  if (!rawData) {
    return null;
  }

  const data = processData(rawData, sourceProjectKey);

  if (data.length === 0) {
    return (
      <div className="CustomRow">
        <p>No stories are able to be scheduled!</p>
      </div>
    );
  }

  return (
    <div className="CustomRow">
      <Column>
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
        <div className="SmallSpacer White" />
      </Column>
    </div>
  );
};

export default Gantt;
