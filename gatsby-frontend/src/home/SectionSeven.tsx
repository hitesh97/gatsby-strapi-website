import React from "react";
import { Box, Flex, Image, Card, Heading, Text } from "rebass";
import SectionFourTile1 from "./SectionFourTile1";

class SectionSeven extends React.Component<{}, {}> {
  public render() {
    return (
      <Box
        sx={{
          backgroundColor: "siteSecondaryBG",
          padding: "100px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            as="h3"
            sx={{
              fontWeight: "300",
              fontSize: "2.2rem",
              marginTop: "0px",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "700px",
              lineHeight: "3.5rem",
            }}
          >
            We Specialise In Branding, Graphic Design, Web Design & Art
            Direction.
          </Text>
          <Box
            sx={{
              marginTop: "30px",
              marginBottom: "30px",
              maxWidth: "100px",
              borderTopColor: "black",
              borderTopWidth: "1px",
              borderTopStyle: "solid",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: "white",
              display: "grid",
              gridGap: 1,
              gridTemplateColumns: ["repeat(1, 1fr)", "repeat(3, 1fr)"],
            }}
          >
            <Box sx={{ maxHeight: "100%" }}>
              <SectionFourTile1 imgUrl="section7_tile1_img.jpeg" />
            </Box>
            <Box sx={{ maxHeight: "100%" }}>
              <SectionFourTile1 imgUrl="section7_tile2_img.jpeg" />
            </Box>
            <Box sx={{ maxHeight: "100%" }}>
              <SectionFourTile1 imgUrl="section7_tile3_img.jpeg" />
            </Box>
            <Box sx={{ maxHeight: "100%" }}>
              <SectionFourTile1 imgUrl="section7_tile4_img.jpeg" />
            </Box>
            <Box sx={{ maxHeight: "100%" }}>
              <SectionFourTile1 imgUrl="section7_tile5_img.jpeg" />
            </Box>
            <Box sx={{ maxHeight: "100%" }}>
              <SectionFourTile1 imgUrl="section7_tile6_img.jpeg" />
            </Box>
            {/* <Box sx={{ maxHeight: "100%" }}>
              <SectionFourTile1 imgUrl="section7_tile7_img.jpeg" />
            </Box>
            <Box sx={{ maxHeight: "100%" }}>
              <SectionFourTile1 imgUrl="section7_tile8_img.jpeg" />
            </Box>
            <Box sx={{ maxHeight: "100%" }}>
              <SectionFourTile1 imgUrl="section7_tile9_img.jpeg" />
            </Box> */}
          </Box>
        </Box>
      </Box>
    );
  }
}

export default SectionSeven;
