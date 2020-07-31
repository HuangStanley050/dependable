import React, { useContext } from "react";
import { format } from "date-fns";
import naturalCompare from "natural-compare";
import DataContext from "./DataContext";
import canBeIncluded from "../utils/canBeIncluded";
import getDependencies from "../utils/getDependencies";
import { Column } from "@iag-packages/chroma-react/lib/layouts";

const processData = (stories, sourceProjectKey) => {
  const sourceStories = stories.filter(
    (story) =>
      story.project.key === sourceProjectKey &&
      !canBeIncluded(story, stories, sourceProjectKey)
  );

  return sourceStories;
};

const TicketList = ({ sourceProjectKey }) => {
  const rawData = useContext(DataContext);

  if (!rawData) {
    return null;
  }

  const data = processData(rawData, sourceProjectKey).sort((story1, story2) =>
    naturalCompare(story1.key, story2.key)
  );
  console.log(data);

  if (data.length === 0) {
    return null;
  }

  return (
    <div className="CustomRow">
      <Column>
        <h3>Unscheduled Features</h3>
        <p>
          The following tickets were unable to be displayed in the Gantt chart
          due to one or more unscheduled dependencies:
        </p>

        {data.map((story) => (
          <div key={story.key} style={{ marginBottom: "10px" }}>
            <span style={{ color: COLOUR_MAP[story.project.key] }}>
              {story.key} - {story.title}
            </span>
            : Dependent on
            <ul style={{ marginLeft: "40px" }}>
              {getDependencies(story.dependencies, rawData)
                .sort((dependency1, dependency2) =>
                  naturalCompare(
                    dependency1.key,
                    dependency2.key
                  )
                )
                .map((dependency) => (
                  <li key={dependency.key}>
                    <span style={{ color: COLOUR_MAP[dependency.project.key] }}>
                      {dependency.key} - {dependency.title}
                    </span>{" "}
                    (
                    {dependency.sprint?.endDate
                      ? `Scheduled to finish ${format(
                          new Date(dependency.sprint.endDate),
                          "dd/MM/yyyy"
                        )}`
                      : "unscheduled"}
                    )
                  </li>
                ))}
            </ul>
          </div>
        ))}
        <div className="Spacer White" />
      </Column>
    </div>
  );
};

const COLOUR_MAP = {
  CGU: "#8000f0", // purple
  CHR: "#d63b30", // red
  FIRE: "#0f924e", // green
  LOK: "#f09c00", // yellow
  SSJ: "#538cf5", // blue
};

export default TicketList;
