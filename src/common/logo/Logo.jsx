import React from 'react'
import { Container } from '../container/container'
import { LogoStyled, TextLogo } from './logo'

export const Logo = () => {
  return (
    <Container>
     <LogoStyled sm></LogoStyled>
    <TextLogo>Turn your ideas into reality</TextLogo>
  </Container>
  )
}
