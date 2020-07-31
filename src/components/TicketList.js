import React, { useContext } from "react";
import { format } from 'date-fns'
import DataContext from "./DataContext";
import canBeIncluded from "../utils/canBeIncluded";
import getDependencies from "../utils/getDependencies";
import { Row, Container } from "@iag-packages/chroma-react/lib/layouts";

const processData = (stories, sourceProjectKey) => {
  const sourceStories = stories
    .filter((story) => story.project.key === sourceProjectKey && !canBeIncluded(story, stories, sourceProjectKey));

  return sourceStories;
};

const TicketList = ({ sourceProjectKey }) => {
  const rawData = useContext(DataContext);

  if (!rawData) {
    return null;
  }

  const data = processData(rawData, sourceProjectKey);

  if (data.length === 0) {
    return <p>All stories are able to be scheduled.</p>;
  }

  return (
    <Container>
      <Row>
        <p>
          The following tickets were unable to be displayed in the Gantt chart
          due to one or more unscheduled dependencies:
        </p>
      </Row>

      {data.map((story) => (
        <Row key={story.key}>
          <p>
            <span style={{ fontWeight: 800 }}>{story.key} - {story.title}: Dependent on</span>
            <br />
            <ul class="dependency-list">
              {getDependencies(story.dependencies, rawData).map(
                (dependency) => (
                  <li key={dependency.key}>
                    {dependency.key} - {dependency.title} (
                    {dependency.sprint?.endDate
                      ? `Scheduled to finish ${format(new Date(dependency.sprint.endDate), 'dd/MM/yyyy')}`
                      : "unscheduled"}
                    )
                  </li>
                )
              )}
            </ul>
          </p>
        </Row>
      ))}
    </Container>
  );
};

export default TicketList;
