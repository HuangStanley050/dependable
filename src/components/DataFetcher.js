import React from "react";
// import useFetch from "use-http";
import DataContext from "./DataContext";

const data = [
  {
    key: "SSJ-127",
    project: {
      key: "SSJ",
      name: "Self Service Journey",
    },
    epic: "SSJ-4",
    points: null,
    estimatedDurationDays: 14,
    priority: "Major",
    dependencies: ["LOK-751", "LOK-567"],
  },
  {
    key: "SSJ-123",
    project: {
      key: "SSJ",
      name: "Self Service Journey",
    },
    epic: "SSJ-1",
    points: null,
    estimatedDurationDays: 14,
    priority: "Major",
    dependencies: ["LOK-123"],
  },
  {
    key: "LOK-751",
    project: {
      key: "LOK",
      name: "Loki",
    },
    epic: "LOK-1",
    points: null,
    sprint: {
      startDate: "2020-08-15",
      endDate: "2020-08-28",
    },
    estimatedDurationDays: null,
    priority: "Major",
    dependencies: ["CHROMA-123"],
  },
  {
    key: "LOK-567",
    project: {
      key: "LOK",
      name: "Loki",
    },
    epic: "LOK-1",
    points: null,
    sprint: {
      startDate: "2020-08-15",
      endDate: "2020-08-28",
    },
    priority: "Major",
    dependencies: [],
  },
  {
    key: "CHROMA-123",
    project: {
      key: "CHROMA",
      name: "Chroma",
    },
    epic: "CHROMA-1",
    points: null,
    sprint: {
      startDate: "2020-07-17",
      endDate: "2020-07-31",
    },
    estimatedDurationDays: null,
    priority: "Major",
    dependencies: [],
  },
  {
    key: "LOK-123",
    project: {
      key: "LOK",
      name: "Loki",
    },
    epic: "LOK-1",
    points: null,
    sprint: null,
    estimatedDurationDays: null,
    priority: "Major",
    dependencies: [],
  },
];

// const options = {
//   suspense: true,
// };

function DataFetcher({ children }) {
  // const { data } = useFetch("/ticketList", options, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export default DataFetcher;
