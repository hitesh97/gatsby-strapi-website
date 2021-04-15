import React from "react";
import { Box, Flex, Button, Text } from "rebass";

interface SectionEightProps {}

class SectionEight extends React.Component<SectionEightProps, {}> {
  public render() {
    return (
      <Box
        sx={{
          backgroundImage: "url(section8_tile1_img.jpeg)",
          backgroundSize: "cover",
          color: "white",
          bg: "gray",
          backgroundPosition: "50% 100%",
          minHeight: "600px",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Flex
          sx={{
            flexWrap: "wrap",
            color: "white",
            paddingTop: "120px",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              flexBasis: 612,
            }}
          ></Box>
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "left",
            }}
          >
            <Box
              sx={{
                minHeight: "300px",
                width: "520px",
                backgroundColor: "defaultBG",
                marginLeft: "20px",
                marginRight: "60px",
                minWidth: "300px",
                padding: "30px",
              }}
            >
              <Box sx={{ paddingLeft: "30px" }}>
                <Text
                  as="h1"
                  sx={{
                    fontWeight: "300",
                  }}
                >
                  We Listen, You Talk!
                </Text>
                <Text as="p" sx={{ marginTop: "40px", lineHeight: "2.5rem" }}>
                  That’s how we understand your expectations of your brand and
                  website. This simple approach provides us with the knowledge
                  we need to plan an effective strategy for your business.
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  }
}

export default SectionEight;
