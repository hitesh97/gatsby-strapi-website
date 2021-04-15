import React from 'react'
import { graphql } from 'gatsby'

import LayoutRoot from '../components/LayoutRoot'
//import ArticlesComponent from '../components/Articles'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

interface CategoryProps {
  data: {
    allStrapiPage: {
      edges: [
        {
          node: {
            slug: string
            introText: string
            title: string
            strapiId: string
            content: string
          }
        }
      ]
    }
  }
}

export const query = graphql`
  query SitePageQuery($slug: String!) {
    allStrapiPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          introText
          title
          strapiId
          content
        }
      }
    }
  }
`

const SitePage: React.FC<CategoryProps> = ({ data }) => {
  // const pageSlug = data.allStrapiPage.edges[0].node.slug
  const pageTitle = data.allStrapiPage.edges[0].node.title
  const pageSubtitle = data.allStrapiPage.edges[0].node.introText
  const content = data.allStrapiPage.edges[0].node.content

  return (
    <LayoutRoot>
      <div>
        <div>
          <h1>{pageTitle}</h1>
          <ReactMarkdown
            plugins={[gfm]}
            children={pageSubtitle}
            renderers={{ em: props => <li {...props}>hello world</li>, paragraph: props => props.children }}
          />
          <ReactMarkdown plugins={[gfm]} children={content} />
        </div>
      </div>
    </LayoutRoot>
  )
}

export default SitePage
