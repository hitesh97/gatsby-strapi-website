/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'

import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
      keywords: string
    }
  }
}

interface Props {
  readonly title?: string
  readonly children?: React.ReactNode
}

const SEO: React.FC<Props> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SeoQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <Helmet
        htmlAttributes={{
          lang: `en`
        }}
        title={data.site.siteMetadata.title}
        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        link={[]}
        script={[]}
        meta={[
          {
            name: `description`,
            content: data.site.siteMetadata.description
          },
          {
            property: `og:title`,
            content: data.site.siteMetadata.title
          },
          {
            property: `og:description`,
            content: data.site.siteMetadata.description
          },
          {
            property: `og:type`,
            content: `website`
          },
          {
            name: `twitter:card`,
            content: `summary`
          },
          {
            name: `twitter:creator`,
            content: 'kilinkis'
          },
          {
            name: `twitter:title`,
            content: data.site.siteMetadata.title
          },
          {
            name: `twitter:description`,
            content: data.site.siteMetadata.description
          }
        ]} // .concat(meta)
      />
    )}
  />
)

export default SEO
