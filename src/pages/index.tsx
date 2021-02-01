import React from 'react'
import Head from 'next/head'

import Pokeball from '../assets/logo-pokedex.png'
import Settings from '../assets/settings.svg'
import PokeballContent from '../assets/g60.png'

import { Container, Header, Content } from '../styles/styles'

const Login: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Pokedex</title>
      </Head>
      <Header>
        <img src={Pokeball} alt="" />
        <img src={Settings} alt="" />
      </Header>
      <Content>
        <img src={PokeballContent} alt="" />
        <form action="/Dashboard">
          <input
            name="email"
            type="email"
            placeholder="Seu melhor email"
            required
          />
          <input type="submit" value="Acessar" />
        </form>
      </Content>
    </Container>
  )
}

export default Login
