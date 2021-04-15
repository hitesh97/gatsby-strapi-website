/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Card, Image, Heading } from 'rebass'

interface SectionThreeTileProps {
  tileHeading: string
  tileImgUrl: string
  tileContent: React.ReactNode
}

class SectionThreeTile extends React.Component<SectionThreeTileProps, {}> {
  public render() {
    return (
      <Card
        sx={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '40px',
          marginBottom: '40px',
          maxWidth: '400px'
        }}
      >
        <Image src={this.props.tileImgUrl} height="290px" width="100%" />
        <h2>{this.props.tileHeading}</h2>
        {this.props.tileContent}
      </Card>
    )
  }
}

export default SectionThreeTile
