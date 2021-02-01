import React from 'react'

import { TypeData } from './styles'

interface TypeBoxProps {
  color:
    | 'default'
    | 'normal'
    | 'fire'
    | 'fighting'
    | 'water'
    | 'grass'
    | 'poison'
    | 'electric'
    | 'ground'
    | 'rock'
    | 'bug'
    | 'dragon'
    | 'ghost'
    | 'dark'
    | 'fairy'
    | 'steel'
    | 'psychic'
    | 'ice'
    | 'flying'
}

const TypeDataBox: React.FC<TypeBoxProps> = ({ color }) => {
  return <TypeData type={color}>{color}</TypeData>
}

export default TypeDataBox
