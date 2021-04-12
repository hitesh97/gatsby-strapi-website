import * as React from 'react'
// import styled from '@emotion/styled'
// import { transparentize } from 'polished'
import { Link, StaticQuery, graphql } from 'gatsby'

// import { heights, dimensions, colors } from '../styles/variables'
// import Container from './Container'

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

interface HeaderProps {}

const HeaderMenu: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <StaticQuery
          query={graphql`
            query {
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
          render={data =>
            data.allStrapiHeaderMenu.edges.map((headerMenu: headerMenuInterface) => {
              return (
                <li key={headerMenu.node.menuItem.id}>
                  <Link to={`/${headerMenu.node.menuItem.page.slug}`}>{headerMenu.node.menuItem.title}</Link>
                </li>
              )
            })
          }
        />
      </ul>
    </div>
  )
}

export default HeaderMenu
