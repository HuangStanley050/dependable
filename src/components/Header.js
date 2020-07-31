import React from "react";
import Helmet from "react-helmet";
import { Image } from "@iag-packages/chroma-react/lib/components";
import {
  getCssUrl,
  getFavicon,
} from "@iag-packages/chroma-react/lib/utils/cdn";
import "../css/stylesheet.css";
import { Column, Row, Container } from "@iag-packages/chroma-react/lib/layouts";

const brand = "chroma";

function HeaderBanner() {
  return (
    <>
      <div className="CustomRow">
        <Column flex={true} alignItems="center">
          <Image
            src={require("../assets/dependable-transparent_Blue-logo.png")}
            height={50}
            alt="Header Logo"
            margin={{ top: 3 }}
          />
          <h3 style={{ margin: 0, marginLeft: 20, marginTop: ".75rem" }}>
            DEPENDABLE
          </h3>
        </Column>
      </div>
      <div className="PageHeader">
        <Helmet>
          <link href={getCssUrl(brand)} rel="stylesheet" />
          <link rel="icon" type="image/png" href={getFavicon(brand)} />
          <meta name="description" />
        </Helmet>
        <Container className="PageHeadingText">
          <Row>
            <Column>
              <Row justifyContent="center">
                <h1>The perfect project management companion</h1>
              </Row>
              <Row justifyContent="center">
                <h3>
                  Take the manual process out of project reporting, have more
                  valuable conversations with your partnering teams.
                </h3>
              </Row>
            </Column>
            <Column></Column>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HeaderBanner;
