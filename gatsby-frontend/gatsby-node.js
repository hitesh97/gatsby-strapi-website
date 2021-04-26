'use strict'

const path = require('path')

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   // Sometimes, optional fields tend to get not picked up by the GraphQL
//   // interpreter if not a single content uses it. Therefore, we're putting them
//   // through `createNodeField` so that the fields still exist and GraphQL won't
//   // trip up. An empty string is still required in replacement to `null`.

//   switch (node.internal.type) {
//     case 'MarkdownRemark': {
//       const { permalink, layout } = node.frontmatter
//       const { relativePath } = getNode(node.parent)

//       let slug = permalink

//       if (!slug) {
//         slug = `/${relativePath.replace('.md', '')}/`
//       }

//       // Used to generate URL to view this content.
//       createNodeField({
//         node,
//         name: 'slug',
//         value: slug || ''
//       })

//       // Used to determine a page layout.
//       createNodeField({
//         node,
//         name: 'layout',
//         value: layout || ''
//       })
//     }
//   }
// }

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const allMarkdown = await graphql(`
//     {
//       allMarkdownRemark(limit: 1000) {
//         edges {
//           node {
//             fields {
//               layout
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   if (allMarkdown.errors) {
//     console.error(allMarkdown.errors)
//     throw new Error(allMarkdown.errors)
//   }

//   allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     const { slug, layout } = node.fields

//     createPage({
//       path: slug,
//       // This will automatically resolve the template to a corresponding
//       // `layout` frontmatter in the Markdown.
//       //
//       // Feel free to set any `layout` as you'd like in the frontmatter, as
//       // long as the corresponding template file exists in src/templates.
//       // If no template is set, it will fall back to the default `page`
//       // template.
//       //
//       // Note that the template has to exist first, or else the build will fail.
//       component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
//       context: {
//         // Data passed to context is available in page queries as GraphQL variables.
//         slug
//       }
//     })
//   })
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        articles: allStrapiArticle {
          edges {
            node {
              strapiId
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
            }
          }
        }
        sitePages:  allStrapiHeaderMenu {
          edges {
            node {
              strapiId
              menuItem {
                page {
                  slug
                }
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog articles pages.
  const articles = result.data.articles.edges
  const categories = result.data.categories.edges
  const sitePages = result.data.sitePages.edges
  console.log('------ site pages -------');
  console.log(sitePages[0].node.menuItem.page.slug);
  console.log('------ site pages -------');
  articles.forEach((article, index) => {
    createPage({
      path: `/article/${article.node.strapiId}`,
      component: require.resolve('./src/templates/article.tsx'),
      context: {
        id: article.node.strapiId
      }
    })
  })

  categories.forEach((category, index) => {
    createPage({
      path: `/category/${category.node.strapiId}`,
      component: require.resolve('./src/templates/category.tsx'),
      context: {
        id: category.node.strapiId
      }
    })
  })

  sitePages.forEach((sitePage, index) => {
    createPage({
      path: `${sitePage.node.menuItem.page.slug}`,
      component: require.resolve('./src/templates/pageTemplate.tsx'),
      context: {
        slug: sitePage.node.menuItem.page.slug
      }
    })
  })
}
