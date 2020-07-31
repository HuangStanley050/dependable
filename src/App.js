import React, { useState } from "react";
import Gantt from "./components/Gantt";
import TicketList from "./components/TicketList";
import DataFetcher from "./components/DataFetcher";
import { Column } from "@iag-packages/chroma-react/lib/layouts";

import FooterBanner from "./components/Footer";
import HeaderBanner from "./components/Header";
import SearchBox from "./components/SearchBox";
import ProjectInformation from "./components/ProjectInformation";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="Wrapper flexDirection">
      <HeaderBanner />
      <ProjectInformation />
      <div className="CustomRow">
        <Column>
          <span>Enter project code to search for dependencies</span>
          <SearchBox doSearch={setSearch} />
        </Column>
      </div>
      <DataFetcher search={search}>
        <Gantt sourceProjectKey={search} />
        <TicketList sourceProjectKey={search} />
      </DataFetcher>
      <FooterBanner />
    </div>
  );
}

export default App;
