import React from "react";
import { Box, Flex, Button, Text } from "rebass";
import { FaPalette, FaRegPaperPlane } from "react-icons/fa";
import SectionTwoTile1 from "./SectionTwoTile1";
import SectionTwoTile2 from "./SectionTwoTile2";

interface SectionTwoProps {}

class SectionTwo extends React.Component<SectionTwoProps, {}> {
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
          <SectionTwoTile1
            tileIcon={null}
            tileSubTitle="ABOUT US"
            tileHeading="How We Work"
            tileContent={
              <>
                <p style={{ marginTop: "40px" }}>
                  Specialists in brand strategy, brand creation and design
                  across print, digital and environmental platforms. We use
                  design thinking to add commercial value to our clients
                  businesses and products, producing work that engages and
                  provokes positive change.
                </p>
                <Button
                  variant="outline"
                  sx={{
                    marginTop: "20px",
                    backgroundColor: "defaultBG",
                    color: "white",
                    fontWeight: "300",
                  }}
                  href="/how-we-work"
                  as="a"
                >
                  LEARN MORE
                </Button>
              </>
            }
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            minHeight: "450px",
          }}
        >
          <SectionTwoTile2
            imgUrl="section2_tile2_img.jpeg"
            tileContent={
              <p style={{ fontSize: "1.2rem", marginTop: "30px" }}>
                They were also very responsive and focused on delivering just
                what we asked for. We’re extremely happy with our site, and
                found Elaine really guided us through the process.
              </p>
            }
          />
        </Box>
      </Flex>
    );
  }
}

export default SectionTwo;
