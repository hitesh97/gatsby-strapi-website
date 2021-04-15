import React from 'react'
import { graphql } from 'gatsby'

import LayoutRoot from '../components/LayoutRoot'
import ArticlesComponent from '../components/Articles'

interface CategoryProps {
  data: {
    articles: {
      edges: Article[]
    }
    categories: [
      {
        name: string
      }
    ]
  }
}

export const query = graphql`
  query categoryAndCategory($id: Int!) {
    articles: allStrapiArticle(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
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
    categories: allStrapiCategory(filter: { strapiId: { eq: $id } }) {
      edges {
        node {
          name
        }
      }
    }
  }
`

const Category: React.FC<CategoryProps> = ({ data }) => {
  const articles = data.articles.edges
  const category = data.categories.length > 0 ? data.categories[0].name : ''

  return (
    <LayoutRoot>
      <div>
        <div>
          <h1>{category}</h1>
          <ArticlesComponent articles={articles} />
        </div>
      </div>
    </LayoutRoot>
  )
}

export default Category
