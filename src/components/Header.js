import React from "react";
import Helmet from "react-helmet";
import {
  Image,
} from "@iag-packages/chroma-react/lib/components";
import {
  getCssUrl,
  getFavicon,
} from "@iag-packages/chroma-react/lib/utils/cdn";
import "../css/stylesheet.css"

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
          src="https://i.imgur.com/zws1zfa.png"
          alt="Page Heading Logo"
        />
      </div>
    </>
  );
}

export default HeaderBanner;
