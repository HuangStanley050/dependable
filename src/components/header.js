import React from "react";
import Helmet from "react-helmet";
import {
  Image,
} from "@iag-packages/chroma-react/lib/components";
import {
  getCssUrl,
  getFavicon,
} from "@iag-packages/chroma-react/lib/utils/cdn";

const brand = "chroma";

function HeaderBanner() {
  return (
    <>
      <Helmet>
        <link href={getCssUrl(brand)} rel="stylesheet" />
        <link rel="icon" type="image/png" href={getFavicon(brand)} />
        <meta name="description" />
      </Helmet>

      <div className="PageHeader">
        <Image
          src="https://i.imgur.com/aDU92jO.jpg"
          alt="Page Heading Logo"
          height="300"
        />
      </div>
    </>
  );
}

export default HeaderBanner;
