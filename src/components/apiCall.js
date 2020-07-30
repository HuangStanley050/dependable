import React from "react";

function ApiCall() {
  const [response, setResponse] = React.useState();
  React.useEffect(() => {
    fetch("localhost:9000").then((response) => {
      setResponse(response.body);
    });
  }, []);

  return <div>{response}</div>;
}

export default ApiCall;
