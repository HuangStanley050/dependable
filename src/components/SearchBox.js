import React from "react";
import { Input } from "@iag-packages/chroma-react/lib/components";
import { Row } from "@iag-packages/chroma-react/lib/layouts";

function SearchBox() {
  return (
    <Row justifyContent="end">
      <Input placeholder="Search"/>
    </Row>
  );
}

export default SearchBox;
