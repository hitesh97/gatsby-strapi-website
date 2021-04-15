import React from 'react'
import { Box, Flex, Button, Text } from 'rebass'
// import  styled from 'styled-components'
import styled from 'styled-components'

interface TopHeroSectionProps {}

const StyledBox = styled(Box)`
  background-color: ${props => props.theme.colors.defaultBG};
`
const StyledButton = styled(Button)`
  background-color: ${props => props.theme.colors.defaultBG};
  margin-top: '20px';
  color: 'white';
  font-weight: '300';
  font-family: "'PT Sans', system-ui, sans-serif";
`

class TopHeroSection extends React.Component<TopHeroSectionProps, {}> {
  public render() {
    return (
      <Box
        sx={{
          backgroundImage: "url('../../Top_Hero_img.jpeg')",
          color: 'white',
          bg: 'gray',
          backgroundPosition: '50% 100%',
          minHeight: '600px',
          objectFit: 'cover',
          backgroundSize: 'cover'
        }}
      >
        <Flex
          sx={{
            flexWrap: 'wrap',
            color: 'white',
            paddingTop: '100px'
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              flexBasis: 612
            }}
          ></Box>
          <Box
            sx={{
              flexGrow: 1,
              textAlign: 'left'
            }}
          >
            <StyledBox
              sx={{
                width: '420px',
                minHeight: '420px',
                marginLeft: '20px'
              }}
            >
              <Box sx={{ paddingLeft: '30px' }}>
                <Box sx={{ minHeight: '80px', borderLeft: '1px solid white' }}></Box>
                <Text
                  as="h1"
                  sx={{
                    marginTop: '20px',
                    fontSize: '3.75rem',
                    fontWeight: '300',
                    lineHeight: '3.5rem'
                  }}
                >
                  Welcome To Our Studio
                </Text>
                <Text as="p" sx={{ marginTop: '20px' }}>
                  Design that excites. Brand identities that pop.
                  <br />
                  Web solutions that are beautiful + functional.
                </Text>
                <StyledButton variant="outline" sx={{}} as="a" href="about-us">
                  Find out more
                </StyledButton>
              </Box>
            </StyledBox>
          </Box>
        </Flex>
      </Box>
    )
  }
}

export default TopHeroSection
