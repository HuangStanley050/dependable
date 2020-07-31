import React, { useState } from "react";
import { Input, Button } from "@iag-packages/chroma-react/lib/components";
import { Row } from "@iag-packages/chroma-react/lib/layouts";
import axios from "axios";

function SearchBox() {
  const [search, setSearch] = useState("");
  const inputSearch = (e) => {
    setSearch(e.target.value);
  };
  const searchBFF = async () => {
    let result = await axios.get(
      `http://localhost:9000/ticketList?type=${search}`
    );
    console.log(result);
  };

  return (
    <Row justifyContent="end">
      <Input placeholder="Search" onChange={inputSearch} />
      <Button
        id="primaryButton"
        primary
        onClick={() => {
          searchBFF();
        }}
      >
        Search
      </Button>
    </Row>
  );
}

export default SearchBox;
