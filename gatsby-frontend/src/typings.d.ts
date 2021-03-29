import { FluidObject } from 'gatsby-image'

interface CSSModule {
  [className: string]: string
}

export interface Category {
  name: string
}
export interface Article {
  node: {
    id: number
    strapiId: string
    image: {
      publicURL: string
      childImageSharp: {
        fluid: FluidObject
      }
    }
    categories: Array<Category>
    title: string
    content: string
  }
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}
