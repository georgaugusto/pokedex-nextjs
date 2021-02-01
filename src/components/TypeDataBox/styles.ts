import styled, { css } from 'styled-components'

interface ContainerProps {
  type?:
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

const typesVariations = {
  default: css`
    background: #d2d2d2;
  `,
  normal: css`
    background: #a8a878;
  `,
  fire: css`
    background: #f08030;
  `,
  fighting: css`
    background: #c03028;
  `,
  water: css`
    background: #6890f0;
  `,
  grass: css`
    background: #78c850;
  `,
  poison: css`
    background: #a040a0;
  `,
  electric: css`
    background: #f8d030;
  `,
  ground: css`
    background: #e0c068;
  `,
  rock: css`
    background: #b8a038;
  `,
  bug: css`
    background: #a8b820;
  `,
  dragon: css`
    background: #7038f8;
  `,
  ghost: css`
    background: #705898;
  `,
  dark: css`
    background: #705848;
  `,
  fairy: css`
    background: #ee99ac;
  `,
  steel: css`
    background: #b8b8d0;
  `,
  psychic: css`
    background: #f85888;
  `,
  ice: css`
    background: #98d8d8;
  `,
  flying: css`
    background: #a890f0;
  `
}

export const TypeData = styled.span<ContainerProps>`
  color: #ffffff;
  padding: 0 5px;
  margin: 0 10px;
  border-radius: 10%;
  text-transform: uppercase;
  ${props => typesVariations[props.type || 'default']};
`
