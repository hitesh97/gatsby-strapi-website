import React from "react";
import { Box, Flex, Image, Card, Heading, Text, Button } from "rebass";
import { FaRegPaperPlane } from "react-icons/fa";
import SectionOneTile from "./SectionOneTile";
import SectionThreeTile from "./SectionThreeTile";
import TechnologyBrandsRibbon from "../technologies/TechnologyBrandsRibbon";

class SectionThree extends React.Component<{}, {}> {
  public render() {
    return (
      <Box
        sx={{
          backgroundColor: "siteSecondaryBG",
          padding: "40px",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Text
            as="h3"
            sx={{
              fontWeight: "300",
              fontSize: "2.5rem",
              marginTop: "0px",
            }}
          >
            We Embrace New Technologies
          </Text>
          <TechnologyBrandsRibbon backgorunColor="siteSecondaryBG" />

          <Button
            variant="outline"
            sx={{
              marginTop: "30px",
              backgroundColor: "defaultBG",
              color: "white",
              fontWeight: "300",
            }}
            href="/technologies"
            as="a"
          >
            LEARN MORE
          </Button>
        </Box>
        <Box
          sx={{
            backgroundColor: "siteSecondaryBG",
            display: "grid",
            gridTemplateColumns: [
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(1, 0.10fr) repeat(3, 1fr) repeat(1, 0.10fr)",
            ],
          }}
        >
          <Box sx={{}}></Box>
          <Box sx={{}}>
            <SectionThreeTile
              tileHeading="Ultimate Timing"
              tileImgUrl="/section3_tile1_img.jpeg"
              tileContent={
                <p>
                  We are extremely comfortable with almost all leading eCommerce
                  platforms, services, and tools. This comfort ensures that your
                  go-to-market time is always optimum.
                </p>
              }
            />
          </Box>
          <Box sx={{}}>
            <SectionThreeTile
              tileHeading="Faster & Stronger"
              tileImgUrl="/section3_tile2_img.jpeg"
              tileContent={
                <p>
                  We help you make decisions for technology choices so you can
                  move quickly in the market. Our are cloud first thinking
                  allows you to scale out and scale up effortlessly.
                </p>
              }
            />
          </Box>
          <Box sx={{}}>
            <SectionThreeTile
              tileHeading="Young & Perspective"
              tileImgUrl="/section3_tile3_img.jpeg"
              tileContent={
                <p>
                  We are always learning new technologies as they evolve and
                  employ best of the breed technology. Our team members are
                  always innovating and brining new and fresh ideas to the
                  table.
                </p>
              }
            />
          </Box>
          <Box sx={{}}></Box>
        </Box>
      </Box>
    );
  }
}

export default SectionThree;
