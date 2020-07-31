import React, { useState } from "react";
import Gantt from "./components/Gantt";
import TicketList from "./components/TicketList";
import DataFetcher from "./components/DataFetcher";
import { Column } from "@iag-packages/chroma-react/lib/layouts";

import FooterBanner from "./components/Footer";
import HeaderBanner from "./components/Header";
import SearchBox from "./components/SearchBox";
import ProjectInfomation from "./components/ProjectInfomation";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="Wrapper flexDirection">
      <HeaderBanner />
      <ProjectInfomation />
      <div className="CustomRow">
        <Column>
          <span>Enter project code to search for dependencies</span>
          <SearchBox doSearch={setSearch} />
        </Column>
      </div>
      <DataFetcher search={search}>
        <Gantt sourceProjectKey={search} />
        <div className="CustomRow">
          <h3>Ticket List</h3>
          <TicketList sourceProjectKey={search} />
        </div>
      </DataFetcher>
      <FooterBanner />
    </div>
  );
}

export default App;
