import * as React from 'react'
import Seo from './Seo'
import Header from './Header'
import { Global, css } from '@emotion/core'
// import styled from '@emotion/styled'
import normalize from '../styles/normalize'

interface LayoutRootProps {
  className?: string
  title?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className, title }) => (
  <>
    <Seo />
    <Global styles={() => css(normalize)} />
    <Header title={title} />
    <main>{children}</main>
  </>
)

export default LayoutRoot
