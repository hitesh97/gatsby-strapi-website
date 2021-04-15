import * as React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

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
    <div>
      <ul>
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
