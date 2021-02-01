/* eslint-disable no-use-before-define */
import React from 'react'

import { ContentBox } from './styles'

interface TypeBoxProps {
  bigImage: string
}

const ContentBoxImage: React.FC<TypeBoxProps> = ({ bigImage }) => {
  return (
    <ContentBox>
      <img src={bigImage} alt="" />
    </ContentBox>
  )
}

export default ContentBoxImage
