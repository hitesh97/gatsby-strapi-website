import React from "react";
import { Box, Flex, Button, Text } from "rebass";
import SectionTwoTile1 from "./SectionTwoTile1";
import SectionFourTile1 from "./SectionFourTile1";

interface SectionFourProps {}

class SectionFour extends React.Component<SectionFourProps, {}> {
  public render() {
    return (
      <Flex
        sx={{
          flexWrap: "wrap",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            minHeight: "450px",
          }}
        >
          <SectionFourTile1 imgUrl="section4_tile1_img.jpeg" />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            minHeight: "450px",
          }}
        >
          <SectionTwoTile1
            tileIcon={null}
            tileSubTitle="WORKING TOGETHER"
            tileHeading="What Can We Do For You?"
            tileContent={
              <>
                <p style={{ marginTop: "40px", lineHeight: "2.5rem" }}>
                  We can build you a new website from scratch. Most likely it
                  will be Wordpress-based. We will also take care of the domain
                  registration for you and and will host and support your site
                  after the development.
                </p>
                <Button
                  variant="outline"
                  sx={{
                    marginTop: "20px",
                    backgroundColor: "defaultBG",
                    color: "white",
                    fontWeight: "300",
                  }}
                  href="/services"
                  as="a"
                >
                  LEARN MORE
                </Button>
              </>
            }
          />
        </Box>
      </Flex>
    );
  }
}

export default SectionFour;
