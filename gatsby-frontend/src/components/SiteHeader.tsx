import React, { FunctionComponent, useState, useEffect } from 'react'
import { Box, Flex } from 'rebass'
import { Link, StaticQuery, graphql } from 'gatsby'

interface categoryInterface {
  node: {
    strapiId: number
    name: string
  }
}
interface headerMenuInterface {
  node: {
    id: string
    menuItem: {
      active: boolean
      id: number
      index: number
      name: string
      title: string
      url: string
      page: {
        slug: string
      }
    }
  }
}

const SiteHeader: FunctionComponent<{ isSticky?: boolean }> = ({ isSticky = false }) => {
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 0.1) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <Flex
      sx={{
        flexWrap: 'wrap',
        color: 'white',
        padding: 2,
        position: `${isSticky ? 'sticky' : scrolled ? 'fixed' : ''}`,
        top: 0,
        width: '100%',
        backgroundColor: 'siteSecondaryBG',
        boxShadow: `${scrolled ? '0 2px 6px rgba(0,0,0,0.2)' : ''}`,
        paddingRight: '60px',
        paddingLeft: '60px'
      }}
    >
      <Box
        sx={{
          flexGrow: 1
        }}
      >
        <ul
          style={{
            display: 'inline-flex',
            listStyle: 'none',
            fontSize: '1.2rem',
            flexWrap: 'inherit',
            padding: '0px'
          }}
        >
          <li style={{ color: 'black', fontSize: '1.5rem' }}>{'<AC />'} Akruti Consulting</li>
        </ul>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          flexBasis: 512,
          textAlign: 'right',
          flexWrap: 'wrap'
        }}
      >
        <ul
          style={{
            display: 'inline-flex',
            listStyle: 'none',
            fontSize: '1.2rem',
            flexWrap: 'inherit',
            padding: '0px'
          }}
        >
          <StaticQuery
            query={graphql`
              query {
                allStrapiCategory {
                  edges {
                    node {
                      strapiId
                      name
                    }
                  }
                }
                allStrapiHeaderMenu {
                  edges {
                    node {
                      id
                      menuItem {
                        active
                        id
                        index
                        name
                        title
                        url
                        page {
                          id
                          slug
                        }
                      }
                    }
                  }
                }
              }
            `}
            render={data => {
              const menuItems = data.allStrapiCategory.edges.map((category: categoryInterface, i: number) => {
                return (
                  <li key={category.node.strapiId} style={{ marginLeft: '15px' }}>
                    <Link to={`/category/${category.node.strapiId}`}>{category.node.name}</Link>
                  </li>
                )
              })

              const pageMenuItems = data.allStrapiHeaderMenu.edges.map((headerMenu: headerMenuInterface) => {
                return (
                  <li key={headerMenu.node.menuItem.id} style={{ marginLeft: '15px' }}>
                    <Link to={`/${headerMenu.node.menuItem.page.slug}`}>{headerMenu.node.menuItem.title}</Link>
                  </li>
                )
              })
              return menuItems.concat(pageMenuItems)
            }}
          />
        </ul>
      </Box>
    </Flex>
  )
}

export default SiteHeader
