import React from "react";
import { Chart } from "react-google-charts";
import Gantt from "./components/ganttChart"
import ApiCall from "./components/apiCall"

function App() {
  return (
    <div>
      {/* <Gantt/> */}
      <ApiCall/>
    </div>
  );
}

export default App;
