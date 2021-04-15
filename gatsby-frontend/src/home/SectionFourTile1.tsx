import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";

interface SectionFourTile1Props {
  imgUrl: string;
}

class SectionFourTile1 extends React.Component<SectionFourTile1Props, {}> {
  public render() {
    return (
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Image
          src={this.props.imgUrl}
          sx={{
            width: "100%",
            height: "100%",
            objectPosition: "50% 0%",
            backgroundPosition: "50% 0%",
          }}
        />
      </Box>
    );
  }
}

export default SectionFourTile1;
