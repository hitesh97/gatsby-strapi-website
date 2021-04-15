import * as React from 'react'
import Seo from './Seo'
// import Header from './Header'
// import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles'
import { Box } from 'rebass'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

interface LayoutRootProps {
  className?: string
  title?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children }) => (
  <>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <GlobalStyles />
      <Seo />
      <Box sx={{}}>
        <SiteHeader isSticky={true} />
      </Box>
      <Box
        sx={{
          flex: '1 1 auto'
        }}
      >
        {children}
      </Box>
      <Box sx={{}}>
        <SiteFooter />
      </Box>
    </Box>
  </>
)

export default LayoutRoot
