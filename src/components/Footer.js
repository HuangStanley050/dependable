import React from "react";
import {
  Footer,
} from "@iag-packages/chroma-react/lib/layouts";
import {
  List,
  ListItem,
  Image,
} from "@iag-packages/chroma-react/lib/components";

function FooterBanner() {
  return (
    <Footer>
      <List inline justifyContent="start">
        <ListItem keyProp="terms-of-use">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </ListItem>
        <ListItem>
            <Image src={`https://i.imgur.com/pZPx8Ni.png`} alt="Footer Image" maxHeight="100"/>
        </ListItem>
      </List>
    </Footer>
  );
}

export default FooterBanner;
