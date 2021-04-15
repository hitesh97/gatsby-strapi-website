import React from 'react'
import { Box, Image } from 'rebass'

interface TechnologyBrandsRibbonProps {
  backgorunColor?: string
}

class TechnologyBrandsRibbon extends React.Component<TechnologyBrandsRibbonProps, {}> {
  public render() {
    return (
      <Box
        sx={{
          backgroundColor: `${this.props.backgorunColor ? this.props.backgorunColor : 'white'}`,
          display: 'grid',
          gridGap: 3,
          gridTemplateColumns: ['repeat(4, 1fr)', 'repeat(11, 1fr)'],
          paddingLeft: '60px',
          paddingRight: '60px',
          marginTop: '60px'
        }}
      >
        <Image src="tech_Icons/react.svg" sx={{ height: '40px', width: '40px' }} alt="reactjs" />
        <Image src="tech_Icons/html5.svg" sx={{ height: '40px', width: '40px' }} alt="html 5" />
        <Image src="tech_Icons/css.svg" sx={{ height: '40px', width: '40px' }} alt="css 3" />
        <Image src="tech_Icons/javascript.svg" sx={{ height: '40px', width: '40px' }} alt="javascript" />
        <Image src="tech_Icons/nodejs.svg" sx={{ height: '40px', width: '40px' }} alt="nodeJs" />
        <Image src="tech_Icons/angularjs.svg" sx={{ height: '40px', width: '40px' }} alt="angularJs" />
        <Image src="tech_Icons/wordpress.svg" sx={{ height: '40px', width: '40px' }} alt="wordpress" />
        <Image src="tech_Icons/php.svg" sx={{ height: '40px', width: '40px' }} />
        <Image src="tech_Icons/aws.svg" sx={{ height: '40px', width: '40px' }} alt="aws" />
        <Image src="tech_Icons/docker.svg" sx={{ height: '40px', width: '40px' }} alt="docker" />
        <Image src="tech_Icons/azure.svg" sx={{ height: '40px', width: '40px' }} alt="Azure" />
      </Box>
    )
  }
}

export default TechnologyBrandsRibbon
