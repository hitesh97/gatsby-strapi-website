import React from 'react'
import { Box, Flex, Link } from 'rebass'
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa'
import SiteConfig from '../data/SiteConfig'

class SiteFooterContactUs extends React.Component<{}, {}> {
  public render() {
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
              textAlign: 'left',
              lineHeight: '1.5rem'
            }}
          >
            <li style={{}}>
              <FaEnvelope size="20" style={{ marginRight: '20px' }} />
              <Link sx={{ color: 'white' }} href={'contact-us'}>
                GET IN TOUCH
              </Link>
            </li>
            <li style={{}}>
              <FaWhatsapp size="20" style={{ marginRight: '20px' }} />
              SCHEDULE A MEETING : {SiteConfig.whatsAppNo}
            </li>
            <li style={{}}>
              <FaPhone size="20" style={{ marginRight: '20px' }} />
              PHONE: {SiteConfig.phone}
            </li>
          </ul>
        </Box>
      </Flex>
    )
  }
}

export default SiteFooterContactUs
