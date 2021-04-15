import React from 'react'
import { Box } from 'rebass'
import SiteFooterContactUs from '../components/SiteFooterContactUs'
import SiteFooterMenu from '../components/SiteFooterMenu'
import SiteFooterSocial from '../components/SiteFooterSocial'

const SiteFooter = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        display: 'grid',
        gridGap: 1,
        gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(1, 0.25fr) repeat(1, 1fr) repeat(1, 1fr) repeat(1, 1fr) repeat(1, 0.25fr)'],
        p: 4,
        minHeight: '275px'
      }}
    >
      <Box sx={{}}></Box>
      <Box sx={{}}>
        <Box sx={{ maxWidth: '400px', textAlign: 'center' }}>
          <SiteFooterMenu />
        </Box>
      </Box>
      <Box sx={{}}>
        <Box sx={{ maxWidth: '400px', textAlign: 'center' }}>
          <SiteFooterContactUs />
        </Box>
      </Box>
      <Box sx={{}}>
        <Box sx={{ maxWidth: '400px', textAlign: 'center' }}>
          <SiteFooterSocial />
        </Box>
      </Box>
      <Box sx={{}}></Box>
    </Box>
  )
}

export default SiteFooter
