import React from "react";
import { Box, Flex, Button, Text } from "rebass";
import SectionTwoTile1 from "./SectionTwoTile1";
import SectionFourTile1 from "./SectionFourTile1";

interface SectionSixProps {}

class SectionSix extends React.Component<SectionSixProps, {}> {
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
            tileSubTitle="MISSION"
            tileHeading="We Design Websites That Work"
            tileContent={
              <>
                <p style={{ marginTop: "40px", lineHeight: "2.5rem" }}>
                  Our passion, excellent listening skills and personalised touch
                  help build a strong and unique rapport with our clients. This
                  enables us to interpret the client’s vision from first meeting
                  and ensures the client’s requirements are reflected in every
                  stage of the graphic and web design process, always exceeding
                  expectations.
                </p>
                <Button
                  variant="outline"
                  sx={{
                    marginTop: "20px",
                    backgroundColor: "defaultBG",
                    color: "white",
                    fontWeight: "300",
                  }}
                  href="/ui-design"
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
          <SectionFourTile1 imgUrl="section6_tile2_img.jpeg" />
        </Box>
      </Flex>
    );
    /* return (
      <Box
        sx={{
          display: "grid",
          gridTemplateAreas: [
            '"marginLeft" "main" "marginRight"',
            '"marginLeft main marginRight"',
          ],
          gridTemplateColumns: ["1fr", "100px 1fr 100px"],
          gridTemplateRows: [
            "min-content min-content 1fr min-content min-content",
          ],

          minHeight: "500px",
        }}
      >
        <Box
          sx={{
            gridArea: "main",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateAreas: [
                '"leftMain" "centerMain"',
                '"leftMain centerMain"',
              ],
              gridTemplateColumns: ["1fr", "1fr 1fr"],
              alignContent: "stretch",
              alignSelf: "stretch",
            }}
          >
            <SectionSixTile1
              gridArea="leftMain"
              tileIcon={<FaRegPaperPlane size="44" />}
              tileHeading="Branding"
              tileContent={
                <ul style={{ listStyle: "circle" }}>
                  <li>Development & Research</li>
                  <li>Development</li>
                  <li>Strategy & Placement</li>
                  <li>Brand Application</li>
                </ul>
              }
            />

            <SectionSixTile2
              gridArea="centerMain"
              tileIcon={<FaPalette size="44" />}
              tileHeading="Graphic Design"
              tileContent={
                <ul style={{ listStyle: "circle" }}>
                  <li>Stationery & Promotional Material</li>
                  <li>Design</li>
                  <li>Art Direction</li>
                  <li>Signage & Environment</li>
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
    ); */
  }
}

export default SectionSix;
