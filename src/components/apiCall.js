import React from "react";

function ApiCall() {
  const [response, setResponse] = React.useState();
  //API CALL MOVED TO BFF
  React.useEffect(() => {
    fetch(
      "https://jira.iag.com.au/rest/api/2/search?jql=PROJECT+%3D+%22Self+Service+Journey%22+AND+type+%3D+Story+AND++statusCategory+%21%3D+Done&maxResults=60",
      {
        method: "GET",
        headers: new Headers({
          Authorization:
            "Basic " +
            btoa(
              process.env.REACT_APP_USER_NAME +
                ":" +
                process.env.REACT_APP_SECRET_CODE
            ),
        }),
      }
    ).then((response) => {
      setResponse(response.body);
    });
  }, []);

  return <div>{response}</div>;
}

export default ApiCall;

