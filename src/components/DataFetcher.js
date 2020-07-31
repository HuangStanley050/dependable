import React from "react";
import useFetch from "use-http";
import DataContext from "./DataContext";

function DataFetcher({ children, search }) {
  const { loading, data } = useFetch(`/ticketList?type=${search}`, {}, [search]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <DataContext.Provider value={data}>{children}</DataContext.Provider>
  );
}

export default DataFetcher;
