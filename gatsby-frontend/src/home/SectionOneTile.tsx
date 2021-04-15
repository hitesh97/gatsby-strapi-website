import React from "react";
import { Box, Flex, Button, Text } from "rebass";
import { FaRegPaperPlane } from "react-icons/fa";

interface SectionOneTileProps {
  gridArea: string;
  tileIcon: React.ReactNode;
  tileHeading: string;
  tileContent: React.ReactNode;
}

class SectionOneTile extends React.Component<SectionOneTileProps, {}> {
  public render() {
    return (
      <Box
        sx={{
          gridArea: this.props.gridArea,
          minHeight: "312px",
          paddingLeft: "30px",
          minWidth: "335px",
        }}
      >
        <Box sx={{ color: "defaultBG", marginTop: "40px" }}>
          {this.props.tileIcon}
        </Box>
        <Text
          as="h3"
          sx={{
            fontWeight: "300",
            fontSize: "2.5rem",
            marginTop: "15px",
          }}
        >
          {this.props.tileHeading}
        </Text>
        {this.props.tileContent}
      </Box>
    );
  }
}

export default SectionOneTile;
