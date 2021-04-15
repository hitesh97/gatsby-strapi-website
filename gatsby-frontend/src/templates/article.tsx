import React from 'react'
import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'

import ReactMarkdown from 'react-markdown'

import LayoutRoot from '../components/LayoutRoot'

// import {MDXProvider} from '@mdx-js/react'
// import {YouTube} from '@blocks/kit'

interface ArticleProps {
  data: {
    strapiArticle: {
      image: {
        url: string
        childImageSharp: {
          fixed: FixedObject
        }
      }
      title: string
      content: string
      published_at: string
      categories: [
        {
          name: string
        }
      ]
    }
  }
}

//const shortcodes = {YouTube}

export const query = graphql`
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      categories {
        name
      }
      image {
        publicURL
        childImageSharp {
          fixed(width: 660) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

const Article: React.FC<ArticleProps> = ({ data }) => {
  const article = data.strapiArticle
  return (
    <LayoutRoot>
      <div>
        <div id="banner">
          <Img fixed={article.image.childImageSharp.fixed} />
          <h1>{article.title}</h1>
        </div>

        <div>
          <div>
            <ReactMarkdown source={article.content} />
          </div>
        </div>
        <div>
          {/* <Img fixed={article.image.localFile.childImageSharp.fixed} /> */}
          {/* <img src={article.image.localFile.url} height="600" /> */}
        </div>
      </div>
    </LayoutRoot>
  )
}

export default Article
