import React from "react";
import useFetch from "use-http";
import DataContext from "./DataContext";
import { Column } from "@iag-packages/chroma-react/lib/layouts";

function DataFetcher({ children, search }) {
  const { loading, error, data } = useFetch(`/ticketList?type=${search}`, {}, [
    search,
  ]);

  if (loading) {
    return (
      <div className="CustomRow">
        <Column>
          <p>Loading...</p>
          <div className="SmallSpacer White" />
        </Column>
      </div>
    );
  }

  if (error) {
    return (
      <div className="CustomRow">
        <Column>
          <p>
            Something went wrong with the search. Please refresh the page and
            try again.
          </p>
          <div className="SmallSpacer White" />
        </Column>
      </div>
    );
  }

  if (!search) {
    return (
      <div className="CustomRow">
        <Column>
          <p>Please search for your project code above.</p>
          <div className="SmallSpacer White" />
        </Column>
      </div>
    );
  }

  if ((data?.length || 0) === 0) {
    return (
      <div className="CustomRow">
        <Column>
          <p>We did not find any data for that project code.</p>
          <div className="SmallSpacer White" />
        </Column>
      </div>
    );
  }

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export default DataFetcher;
