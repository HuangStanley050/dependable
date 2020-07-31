import React, { useState } from "react";
import { Input, Button } from "@iag-packages/chroma-react/lib/components";
import { Row } from "@iag-packages/chroma-react/lib/layouts";

function SearchBox({ doSearch }) {
  const [search, setSearch] = useState("");
  const inputSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Row justifyContent="end">
      <Input placeholder="Search" onChange={inputSearch} />
      <Button
        id="primaryButton"
        primary
        onClick={() => {
          doSearch(search);
        }}
      >
        Search
      </Button>
    </Row>
  );
}

export default SearchBox;
