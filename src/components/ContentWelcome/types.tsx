/* eslint-disable no-use-before-define */
import React from 'react'

import { Content } from './styles'

import PokeballContent from '../../assets/g60.png'

const ContentBoxImage: React.FC = () => {
  return (
    <Content>
      <img src={PokeballContent} alt="" />
      <h1>Bem vindo, Selecione seu pokemon preferido!</h1>
    </Content>
  )
}

export default ContentBoxImage
