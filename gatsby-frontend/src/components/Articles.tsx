import React from 'react'
import { Article } from '../typings'
import Card from './Card'

interface ArticlesProps {
  articles: Article[]
}

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5)
  const leftArticles = articles.slice(0, leftArticlesCount)
  const rightArticles = articles.slice(leftArticlesCount, articles.length)

  return (
    <div>
      <div>
        <div>
          {leftArticles.map(article => {
            return <Card article={article} key={`article__${article.node.id}`} />
          })}
        </div>
        <div>
          <div>
            {rightArticles.map(article => {
              return <Card article={article} key={`article__${article.node.id}`} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
