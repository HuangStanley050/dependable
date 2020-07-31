import React, { useState } from "react";
import { Input, Button, Form } from "@iag-packages/chroma-react/lib/components";
import { Row } from "@iag-packages/chroma-react/lib/layouts";

function SearchBox({ doSearch }) {
  const [search, setSearch] = useState("");
  const inputSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Form onSubmit={(e) => {
      e.preventDefault()

      doSearch(search);
    }}>
      <Row justifyContent="end">
        <Input placeholder="Search" onChange={inputSearch}/>
        <Button
          id="primaryButton"
          primary
          type="submit"
        >
          Search
        </Button>
      </Row>
    </Form>
  );
}

export default SearchBox;
