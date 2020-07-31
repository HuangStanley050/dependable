import React from "react";
import { Image, Icon } from "@iag-packages/chroma-react/lib/components";
import "../css/stylesheet.css";
import { Column, Row } from "@iag-packages/chroma-react/lib/layouts";

function ProjectInformation() {
  return (
    <div>
      <div className="Spacer Grey" />
      <div className="CustomRow Grey">
        <Column className="flexDirection" flex={true} justifyContent="center">
          <Row>
            <h2>Problem Statement</h2>
          </Row>
          <Row>
            <span>
              When building apps at IAG, every project at IAG has multiple teams
              trying to coordinate work. There are entire departments setup to
              manage programs in a manual way. The Serenity project has 20 teams
              all with different timelines, it’s impossible to see at a glance
              when teams have scheduled in work. Tracking all dependent teams is
              a nightmare.
            </span>
          </Row>
        </Column>
        <Column
          className="flexDirection"
          flex={true}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={require("../assets/problem_statement.png")}
            width={600}
            alt="Problem Statement Image"
          />
        </Column>
      </div>
      <div className="Spacer Grey" />
      <div className="Spacer White" />
      <div className="CustomRow">
        <Column
          className="flexDirection"
          flex={true}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={require("../assets/dependable-transparent_Blue.png")}
            width={500}
            alt="Problem Statement Image"
          />
        </Column>
        <Column className="flexDirection" flex={true} justifyContent="center">
          <Row>
            <h2>Introducing: Dependable</h2>
          </Row>
          <Row>
            <span>
              Dependable is the perfect project management companion.<br/><br/> Fully
              integrated with all JIRA projects, our app uses Google Charts to
              dynamically display all upcoming features and their delivery
              timeline, including linking dependent features between teams and
              providing a full delivery plan. This eliminates the manual process
              involved in trolling through JIRA backlogs, speaking to partner
              teams, updating delivery dates and reporting on timelines.
            </span>
          </Row>
        </Column>
      </div>
      <div className="Spacer White" />
      <div className="Spacer Grey" />
      <div className="CustomRow Grey">
        <Column className="flexDirection" flex={true} justifyContent="center">
          <Row>
            <h2>Populate your chart in two easy steps</h2>
          </Row>
          <Row>
            <span>
              <Icon name="check" /> Add any dependencies to your JIRA
              project’s stories
              <br />
              <Icon name="check" /> Search for your JIRA project (either
              by name or by code) in the search box below
            </span>
          </Row>
        </Column>
        <Column
          className="flexDirection"
          flex={true}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={require("../assets/laptop1.png")}
            width={600}
            alt="Problem Statement Image"
          />
        </Column>
      </div>
      <div className="Spacer Grey" />
      <div className="Spacer White" />
    </div>
  );
}

export default ProjectInformation;
