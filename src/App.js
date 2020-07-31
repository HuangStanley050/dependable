import React, { Suspense, useState } from "react";
import Gantt from "./components/Gantt";
import TicketList from "./components/TicketList";
import DataFetcher from "./components/DataFetcher";
import { Main, Row, Container } from "@iag-packages/chroma-react/lib/layouts";

import FooterBanner from "./components/Footer";
import HeaderBanner from "./components/Header";
import SearchBox from "./components/SearchBox";

function App() {
  const [search, setSearch] = useState("")

  return (
    <div>
      <HeaderBanner />
      <Main>
        <Container fluid>
          <Row>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </Row>
          <SearchBox doSearch={setSearch} />
          <Suspense fallback="Loading...">
            <DataFetcher search={search}>
              <Row>
                <h3>Gantt Chart</h3>
              </Row>
              <Row>
                <div className="graph">
                  <Gantt />
                </div>
              </Row>
              <Row>
                <h3>Ticket List</h3>
                <TicketList />
              </Row>
            </DataFetcher>
          </Suspense>
        </Container>
      </Main>
      <FooterBanner />
    </div>
  );
}

export default App;
