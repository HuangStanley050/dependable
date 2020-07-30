import React from "react";
import useFetch from "use-http";
import DataContext from "./DataContext";

const options = {
  suspense: true,
};

function DataFetcher({ children }) {
  const { data } = useFetch("/ticketList", options, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export default DataFetcher;
