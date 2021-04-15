import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import { FaQuoteLeft } from "react-icons/fa";

interface SectionTwoTile2Props {
  tileContent: React.ReactNode;
  imgUrl: string;
}

class SectionTwoTile2 extends React.Component<SectionTwoTile2Props, {}> {
  public render() {
    return (
      <Box
        sx={{
          padding: "60px",
          backgroundColor: "defaultBGLight",
          height: "100%",
        }}
      >
        {this.props.tileContent && (
          <FaQuoteLeft
            size="44"
            style={{
              position: "absolute",
              opacity: "0.2",
              height: "80px",
              width: "80px",
              marginTop: "-20px",
              marginLeft: "-20px",
            }}
          />
        )}
        {this.props.tileContent && <Box>{this.props.tileContent}</Box>}
        <Image
          src={this.props.imgUrl}
          sx={{
            width: "100%",
            height: "300px",
            objectPosition: "50% 0%",
            backgroundPosition: "50% 0%",
            marginTop: "30px",
            maxWidth: "600px",
          }}
        />
      </Box>
    );
  }
}

export default SectionTwoTile2;
