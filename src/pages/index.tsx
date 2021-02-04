/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Pokeball from '../assets/logo-pokedex.png'
import Settings from '../assets/settings.png'
import PokeballContent from '../assets/g60.png'

import { Container, Header, Content } from '../styles/styles'

const Login: React.FC = () => {
  const router = useRouter()

  const handleClick = e => {
    e.preventDefault()
    router.push('/Dashboard')
  }

  return (
    <Container>
      <Head>
        <title>Pokedex</title>
      </Head>
      <Header>
        <img src={Pokeball} alt="" />
        <img className="settings" src={Settings} alt="" />
      </Header>
      <Content>
        <img src={PokeballContent} alt="" />
        <form onSubmit={handleClick}>
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
