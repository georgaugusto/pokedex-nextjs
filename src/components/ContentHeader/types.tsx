/* eslint-disable no-use-before-define */
import React from 'react'

import { Content, Title } from './styles'

interface TypeBoxProps {
  title: string
  image: string
}

const ContentHeader: React.FC<TypeBoxProps> = ({ title, image }) => {
  return (
    <Content>
      <Title>
        <h1>{title}</h1>
        <img src={image} alt="" />
      </Title>
      <div>
        <p>claro - escuro</p>
      </div>
    </Content>
  )
}

export default ContentHeader
