import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import 'modern-normalize'
import LayoutRoot from '../components/LayoutRoot'
import ArticlesComponent from '../components/Articles'
import { Article } from '../typings'
interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
  allStrapiArticle: {
    edges: Article[]
  }
}

interface Props {
  readonly title?: string
  readonly children: React.ReactNode
}

const IndexLayout: React.FC<Props> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        allStrapiArticle {
          edges {
            node {
              strapiId
              title
              categories {
                name
              }
              image {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 595, quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot title={data.site.siteMetadata.title}>
        <div>
          <div>
            <h1>{data.site.siteMetadata.title}</h1>
            <ArticlesComponent articles={data.allStrapiArticle.edges} />
            hello world
          </div>
        </div>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
