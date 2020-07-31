import React, { useContext } from "react";
import { format } from 'date-fns'
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

  const data = processData(rawData, sourceProjectKey);

  if (data.length === 0) {
    return null;
  }

  return (
    <div className="CustomRow">
      <Column>
        <h3>Ticket List</h3>
        <p>
          The following tickets were unable to be displayed in the Gantt chart
          due to one or more unscheduled dependencies:
        </p>

      {data.map((story) => (
          <p key={story.key}>
            <span style={{ color: COLOUR_MAP[story.project.key] }}>{story.key} - {story.title}</span>: Dependent on
            <br />
            <ul style={{ marginLeft: "40px" }}>
              {getDependencies(story.dependencies, rawData).map(
                (dependency) => (
                  <li key={dependency.key}>
                    <span style={{ color: COLOUR_MAP[dependency.project.key] }}>{dependency.key} - {dependency.title}</span> (
                    {dependency.sprint?.endDate
                      ? `Scheduled to finish ${format(new Date(dependency.sprint.endDate), 'dd/MM/yyyy')}`
                      : "unscheduled"}
                    )
                  </li>
                )
              )}
            </ul>
          </p>
        ))}
        <div className="Spacer White" />
      </Column>
    </div>
  );
};

const COLOUR_MAP = {
  CGU: "#8000f0",
  CHR: "#f09c00",
  FIRE: "#538cf5",
  LOK: "#0f924e",
  SSJ: "#d63b30",
}

export default TicketList;
