import React, { useState } from "react";
import { Input, Button, Form } from "@iag-packages/chroma-react/lib/components";

function SearchBox({ doSearch }) {
  const [search, setSearch] = useState("");
  const inputSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();

        doSearch(search);
      }}
    >
      <Input placeholder="Search" onChange={inputSearch} />
      <Button id="primaryButton" primary type="submit" margin={{ left: 2 }}>
        Create
      </Button>
    </Form>
  );
}

export default SearchBox;
