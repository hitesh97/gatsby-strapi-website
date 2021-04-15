import React from 'react'
import { Box, Flex } from 'rebass'

import { FaFacebookSquare, FaLinkedinIn, FaTwitterSquare } from 'react-icons/fa'

const SiteFooterSocial = () => {
  return (
    <Flex
      sx={{
        flexWrap: 'wrap',
        color: 'white',
        padding: 3
      }}
    >
      <Box
        sx={{
          flexGrow: 1
        }}
      ></Box>
      <Box
        sx={{
          flexGrow: 1,
          flexBasis: 512,
          flexWrap: 'wrap'
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            flexWrap: 'inherit',
            padding: '0px',
            textAlign: 'left'
          }}
        >
          <li style={{}}>
            <FaFacebookSquare size="30" style={{ marginRight: '20px' }} />
            <FaLinkedinIn size="30" style={{ marginRight: '20px' }} />
            <FaTwitterSquare size="30" style={{ marginRight: '20px' }} />
          </li>
        </ul>
      </Box>
    </Flex>
  )
}

export default SiteFooterSocial
