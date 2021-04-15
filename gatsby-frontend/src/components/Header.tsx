import * as React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import HeaderMenu from './HeaderMenu'

interface categoryInterface {
  node: {
    strapiId: number
    name: string
  }
}

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => (
  <div>
    <div>
      <nav data-uk-navbar>
        <HeaderMenu />

        <div>
          <ul>
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
                }
              `}
              render={data =>
                data.allStrapiCategory.edges.map((category: categoryInterface, i: number) => {
                  return (
                    <li key={category.node.strapiId}>
                      <Link to={`/category/${category.node.strapiId}`}>{category.node.name}</Link>
                    </li>
                  )
                })
              }
            />
          </ul>
        </div>
      </nav>
    </div>
  </div>
)

export default Header
