import React, { Suspense, useState } from "react";
import Gantt from "./components/Gantt";
import TicketList from "./components/TicketList";
import DataFetcher from "./components/DataFetcher";
import { Main, Row, Container } from "@iag-packages/chroma-react/lib/layouts";

import FooterBanner from "./components/Footer";
import HeaderBanner from "./components/Header";
import SearchBox from "./components/SearchBox";
import ProjectInfomation from "./components/ProjectInfomation";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <HeaderBanner />
      <ProjectInfomation />
      <Container>
        <SearchBox doSearch={setSearch}/>
          <DataFetcher search={search}>
            <Row>
              <h3>Gantt Chart</h3>
            </Row>
            <Row>
              <div className="graph">
                <Gantt sourceProjectKey={search} />
              </div>
            </Row>
            <Row>
              <h3>Ticket List</h3>
              <TicketList sourceProjectKey={search} />
            </Row>
          </DataFetcher>
      </Container>
      <FooterBanner />
    </div>
  );
}

export default App;
