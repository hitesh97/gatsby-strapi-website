import React from 'react'
import { graphql } from 'gatsby'
import LayoutRoot from '../components/LayoutRoot'
// import ArticlesComponent from '../components/Articles'
// import ReactMarkdown from 'react-markdown'
// import gfm from 'remark-gfm'
import TopHeroSection from '../home/TopHeroSection'
import SectionOne from '../home/SectionOne'
import SectionTwo from '../home/SectionTwo'
import SectionThree from '../home/SectionThree'
import SectionFour from '../home/SectionFour'
import SectionFive from '../home/SectionFive'
import SectionSix from '../home/SectionSix'
import SectionSeven from '../home/SectionSeven'
import SectionEight from '../home/SectionEight'

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
  query SitePageQuery2($slug: String!) {
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
  const pageSlug = data.allStrapiPage.edges[0].node.slug
  const pageTitle = data.allStrapiPage.edges[0].node.title
  const pageSubtitle = data.allStrapiPage.edges[0].node.introText
  const content = data.allStrapiPage.edges[0].node.content

  return (
    <LayoutRoot>
      {pageSlug === 'home' && (
        <>
          <TopHeroSection />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <SectionSeven />
          <SectionEight />
        </>
      )}
    </LayoutRoot>
  )
}

export default SitePage
