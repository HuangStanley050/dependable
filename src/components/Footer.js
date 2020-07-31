import React from "react";
import { Column } from "@iag-packages/chroma-react/lib/layouts";
import { Image } from "@iag-packages/chroma-react/lib/components";

function FooterBanner() {
  return (
    <>
      <div className="Spacer White" />
      <div
        className="Grey CustomRow"
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <Column alignItems="center">
          <h4>DEPENDABLE</h4>
          <span>Built during the IAG July "Anything Goes" Hackathon</span>
        </Column>
        <Column flex={true} alignItems="center" justifyContent="end">
          <Image
            src={require("../assets/dependable-transparent_Blue-logo.png")}
            height={50}
            alt="Header Logo"
          />
        </Column>
      </div>
    </>
  );
}

export default FooterBanner;
