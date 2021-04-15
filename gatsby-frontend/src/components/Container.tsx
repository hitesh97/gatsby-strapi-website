import * as React from 'react'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
`

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children }) => <StyledContainer>{children}</StyledContainer>

export default Container
