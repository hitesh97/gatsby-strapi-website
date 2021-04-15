import React from 'react'
import { Box, Flex, Link } from 'rebass'
import MenuItems from '../data/menu'

class SiteFooterMenu extends React.Component<{}, {}> {
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
            textAlign: 'left',
            flexWrap: 'wrap'
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              flexWrap: 'inherit',
              padding: '0px',
              lineHeight: '1.5rem'
            }}
          >
            {MenuItems.filter(item => item.enabled).map(item => (
              <li key={`footer-menu-${item.id}`} style={{}}>
                <Link key={item.id} href={item.href} sx={{ color: 'white' }}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </Flex>
    )
  }
}

export default SiteFooterMenu
