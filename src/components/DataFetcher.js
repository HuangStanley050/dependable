import React from "react";
import useFetch from "use-http";
import DataContext from "./DataContext";

function DataFetcher({ children, search }) {
  const { loading, error, data } = useFetch(`/ticketList?type=${search}`, {}, [
    search,
  ]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && (
        <p>
          Something went wrong with the search. Please refresh the page and try
          again.
        </p>
      )}
      {(data?.length || 0) > 0 ? (
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
      ) : (
        <p>We did not find any data for that project code.</p>
      )}
    </>
  );
}

export default DataFetcher;
