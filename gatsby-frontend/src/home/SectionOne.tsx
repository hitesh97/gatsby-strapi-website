import React from "react";
import { Box, Flex, Button, Text } from "rebass";
import { FaPalette, FaPencilRuler, FaRegPaperPlane } from "react-icons/fa";
import SectionOneTile from "./SectionOneTile";

interface SectionOneProps {}

class SectionOne extends React.Component<SectionOneProps, {}> {
  public render() {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateAreas: ['"main"', '"marginLeft" "main" "marginRight"'],
          gridTemplateColumns: ["1fr", "1fr"],
          marginBottom: "40px",
          marginTop: "40px",
        }}
      >
        <Box
          sx={{
            gridArea: "main",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateAreas: [
                '"leftMain" "centerMain" "rightMain"',
                '"leftMain" "centerMain" "rightMain"',
                '"leftMain centerMain rightMain"',
              ],
              gridTemplateColumns: ["1fr", "1fr", "1fr 1fr 1fr"],
            }}
          >
            <SectionOneTile
              gridArea="rightMain"
              tileIcon={<FaPencilRuler size="44" />}
              tileHeading="ECommerce"
              tileContent={
                <ul style={{ listStyle: "circle" }}>
                  <li>Front & Back-end for Ecommerce</li>
                  <li>Woo-Commerce, Shopify</li>
                  <li>Content Managed ECommerce</li>
                  <li>Custom Integrations with Payment Gateways</li>
                  <li>Third party API integrations</li>
                </ul>
              }
            />
            <SectionOneTile
              gridArea="leftMain"
              tileIcon={<FaRegPaperPlane size="44" />}
              tileHeading="Web Design"
              tileContent={
                <ul style={{ listStyle: "circle" }}>
                  <li>Responsive design and Mobile first approach</li>
                  <li>User Interface Design</li>
                  <li>User Experience Design</li>
                  <li>Custom Application Design</li>
                  <li>Software Product Design</li>
                </ul>
              }
            />

            <SectionOneTile
              gridArea="centerMain"
              tileIcon={<FaPalette size="44" />}
              tileHeading="Web Development"
              tileContent={
                <ul style={{ listStyle: "circle" }}>
                  <li>Cross Browser Web and Application</li>
                  <li>CMS Development</li>
                  <li>Custom Applications</li>
                  <li>Enterprise Web Devleopment</li>
                  <li>Product Devleopment</li>
                  <li>WordPress / HTML5 / CSS3</li>
                  <li>ReactJs / AngularJs / VueJs / NextJs</li>
                </ul>
              }
            />
          </Box>
        </Box>
        <Box
          sx={{
            gridArea: "marginLeft",
          }}
        ></Box>
        <Box
          sx={{
            gridArea: "marginRight",
          }}
        ></Box>
      </Box>
    );
  }
}

export default SectionOne;
