import React, { useContext } from "react";
import DataContext from "./DataContext";
import canBeIncluded from "../utils/canBeIncluded";
import getDependencies from "../utils/getDependencies";

const processData = (stories, sourceProjectKey) => {
  const sourceStories = stories
    .filter((story) => story.project.key === sourceProjectKey)
    .filter((story) => !canBeIncluded(story, stories, sourceProjectKey));

  return sourceStories;
};

const TicketList = () => {
  console.log("here");
  const rawData = useContext(DataContext);
  console.log("rawData", rawData);
  if (!rawData) {
    return null;
  }

  const data = processData(rawData, "SSJ");
  console.log("data", data);

  if (data.length === 0) {
    return <p>All stories are able to be scheduled.</p>;
  }

  return (
    <>
      <p>
        The following tickets were unable to be displayed in the Gantt chart due
        to one or more unscheduled dependencies:
      </p>
      {data.map((story) => (
        <p key={story.key}>
          {story.key}: Dependent on
          <br />
          <ul class="dependency-list">
            {getDependencies(story.dependencies, rawData).map((dependency) => (
              <li key={dependency.key}>
                {dependency.key}{" "}
                ({dependency.sprint
                  ? `Scheduled to finish ${dependency.sprint.endDate}`
                  : "unscheduled"})
              </li>
            ))}
          </ul>
        </p>
      ))}
    </>
  );
};

export default TicketList;
