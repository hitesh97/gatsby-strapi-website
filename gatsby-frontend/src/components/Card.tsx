import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Article } from '../typings'

interface ArticleProps {
  article: Article
}

const Card: React.FC<ArticleProps> = ({ article }) => {
  return (
    <Link to={`/article/${article.node.strapiId}`}>
      <div>
        <div>
          {/* <Img fixed={article.node.image.childImageSharp.fixed} /> */}
          {/* <img src={article.node.image.publicURL} alt={article.node.image.publicURL} height="100" /> */}
          {/* <img src={article.node.image.localFile.url} height="100" /> */}
          <Img fluid={article.node.image.childImageSharp.fluid} />
        </div>
        <div>
          <p id="category">{article.node.categories.length > 0 ? article.node.categories.map(category => category.name).join(',') : ''}</p>
          <p id="title">{article.node.title}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
