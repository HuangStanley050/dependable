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
              Dependable is the perfect project management companion.
              <br />
              <br /> Fully integrated with all JIRA projects, our app uses
              Google Charts to dynamically display all upcoming features and
              their delivery timeline, including linking dependent features
              between teams and providing a full delivery plan. This eliminates
              the manual process involved in trolling through JIRA backlogs,
              speaking to partner teams, updating delivery dates and reporting
              on timelines.
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
              <Icon name="check" /> Add any dependencies to your JIRA project’s
              stories
              <br />
              <Icon name="check" /> Search for your JIRA project (either by name
              or by code) in the search box below
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
      <div className="CustomRow">
        <Column
          className="flexDirection"
          flex={true}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={require("../assets/5star.png")}
            width={500}
            alt="Problem Statement Image"
          />
        </Column>
        <Column className="flexDirection" flex={true} justifyContent="center">
          <Row>
            <h2>Customer Feedback</h2>
          </Row>
          <Row>
            <span>
              "For a while now as an IM, I struggle to keep up with when the SSC
              dependency tickets will drop and when the SSC tickets can be
              unblocked.
              <br />
              <br />
              Dependable is the solution that I am looking for! Gone are the
              days of manually mapping the dependency cards from other JIRA
              backlog with ours or creating an ad-hoc chart to have
              prioritization and scheduling discussion with other enabling
              teams.
              <br />
              <br />
              I now have confidence of a consistently up-to-date view that
              generates real-time, automatically and focus on having
              conversations with other teams or sprint planning"
              <br />
              <br />- Catherine Thum
            </span>
          </Row>
        </Column>
      </div>
      <div className="Spacer White" />
      <div className="Spacer Grey" />
      <div className="CustomRow Grey">
        <Column className="flexDirection" flex={true} justifyContent="center">
          <Row>
            <h2>Features</h2>
          </Row>
          <Row>
            <span>
              <Icon name="check" color="green"/> Fully integrated with JIRA 
              <br />
              <Icon name="check" color="green"/> Fully published on Github
              <br />
              <Icon name="check" color="green"/> No mocked data, all real API requests.
              <br />
              <Icon name="check" color="green"/> Works for any JIRA project at IAG 
              <br />
              <Icon name="check" color="green"/> Works both on production and
              <br />
              <Icon name="check" color="green"/> UAT  Clear pipeline of new features 
              <br />
              <br />
              Future State Filters Export
              <br />
              <Icon name="minus" /> Formats 
              <br />
              <Icon name="minus" /> Estimation 
              <br />
              <Icon name="minus" /> variances
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
            src={require("../assets/nownext.png")}
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
