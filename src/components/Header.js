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
      <Container>
        <Row>
          <Column alignItems="center">
            <h3>DEPENDENT</h3>
          </Column>
          <Column flex={true} alignItems="center" justifyContent="end"> 
            <Image
              src={require("../assets/dependable-transparent_Blue-logo.png")}
              height={50}
              alt="Header Logo"
            />
          </Column>
        </Row>
      </Container>
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
                <h2>The perfect project management companion</h2>
              </Row>
              <Row justifyContent="center">
                <h5>
                  Take the manual process out of project reporting, have more
                  valuable conversations with your partnering teams.
                </h5>
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
