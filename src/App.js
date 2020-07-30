import React, { Suspense } from "react";
import Gantt from "./components/Gantt";
import DataFetcher from "./components/DataFetcher";

function App() {
  return (
    <div className="graph">
      <Suspense fallback="Loading...">
        <DataFetcher>
          <Gantt />
        </DataFetcher>
      </Suspense>
    </div>
  );
}

export default App;
