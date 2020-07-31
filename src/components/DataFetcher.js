import React from "react";
import useFetch from "use-http";
import DataContext from "./DataContext";

function DataFetcher({ children, search }) {
  const { loading, error, data } = useFetch(`/ticketList?type=${search}`, {}, [
    search,
  ]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Something went wrong with the search. Please refresh the page and try
        again.
      </p>
    );
  }

  if(!search) {
    return <p>Please search for your project code above.</p>
  }

  if ((data?.length || 0) === 0) {
    return <p>We did not find any data for that project code.</p>;
  }

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export default DataFetcher;
