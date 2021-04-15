import React from "react";
import { Box, Flex, Image, Card, Heading, Text } from "rebass";

class SectionFive extends React.Component<{}, {}> {
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
              maxWidth: "1000px",
              lineHeight: "3.5rem",
            }}
          >
            It’s The Unique Ideas And The Passionate People Behind Them That
            Inspire Us To Create Engaging Design.
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
          <Text
            as="p"
            sx={{
              fontWeight: "300",
              fontSize: "1.25rem",
              marginTop: "30px",
              maxWidth: "1200px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "2.5rem",
            }}
          >
            We approach every project with the same energy and enthusiasm,
            providing our clients with a personal one-on-one service, a unique
            design solution and a strong, well-defined brand. We pride ourselves
            on being progressive innovative advisers and it’s very important our
            website reflects that. Having worked with previous designers
            flexibility and responsiveness were key characteristics we were
            looking for as well as a strong creative flair.
          </Text>
        </Box>
      </Box>
    );
  }
}

export default SectionFive;
