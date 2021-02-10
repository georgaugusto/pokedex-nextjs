/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'

import {
  Container,
  Header,
  Content,
  ContentBody,
  ContentBox
} from '../../styles/Dashboard/styles'

import Pokeball from '../../assets/logo-pokedex.png'

import TypeDataBox from '../../components/TypeDataBox'
import ContentWelcome from '../../components/ContentWelcome'

import ContentHeader from '../../components/ContentHeader'
import ContentBoxImage from '../../components/ContentBoxImage'

interface IPokedex {
  name: string
  url: string
}

interface TypeBoxProps {
  name:
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

interface IPokemon {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  stats: [
    {
      base_stat: string
      stat: {
        name: string
      }
    }
  ]
  types: [
    {
      type: TypeBoxProps
    }
  ]
  height: number
  weight: number
}

interface ISpecies {
  evolution_chain: {
    url: string
  }
  flavor_text_entries: [
    {
      flavor_text: string
    }
  ]
  id: number
}

const Dashboard: React.FC<void> = () => {
  const [pokemons, setPokemons] = useState<IPokedex[]>([])
  const [pokeman, setPokeman] = useState<IPokemon>()
  const [species, setSpecies] = useState<ISpecies>()
  const [search, setSearch] = useState('')
  const [chain, setChain] = useState<IPokedex[]>([])

  useEffect(() => {
    async function loadPokemons(): Promise<void> {
      const pokemons = await axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.data.results)
      setPokemons(pokemons)
    }
    loadPokemons()
  }, [])

  async function loadPokemon(n: number): Promise<void> {
    const pokeman = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${n}`)
      .then(response => response.data)
    getPokemonSpecies(n)
    setPokeman(pokeman)
  }

  function getPokemonsList(pokemons) {
    return pokemons.map((pokemon, i) => {
      if (
        search === '' ||
        search.includes(pokemon.name) ||
        search === pokemon.url.slice(34, 37).replace('/', '')
      ) {
        return (
          <span key={i} onClick={() => loadPokemon(i + 1)}>
            #{(i + 1).toString().padStart(3, '0')} - {pokemon.name}
          </span>
        )
      } else {
        return null
      }
    })
  }

  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value)
  }

  function getPokemonsTypes(pokeman) {
    const pokemanTypes = pokeman.types
    return (
      <ul>
        {pokemanTypes.map((types, i) => (
          <TypeDataBox color={types.type.name} key={i}>
            {types.type.name}
          </TypeDataBox>
        ))}
      </ul>
    )
  }

  function getPokemonsStats(pokeman) {
    const pokemanStats = pokeman.stats
    return (
      <div>
        {pokemanStats.map((stats, i) => {
          return (
            <span key={i}>
              {stats.base_stat}{' '}
              {stats.stat.name
                .replace('attack', 'atk')
                .replace('defense', 'def')
                .replace('special', 'sp')
                .toUpperCase()}
            </span>
          )
        })}
      </div>
    )
  }

  async function getPokemonSpecies(n: number): Promise<void> {
    const pokemonSpecies: ISpecies = await axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${n}`)
      .then(response => response.data)
    GetEvolutionChain(pokemonSpecies.evolution_chain.url)
    setSpecies(pokemonSpecies)
  }

  async function GetEvolutionChain(url): Promise<void> {
    const evolutionUrl = await axios
      .get(`${url}`)
      .then(response => response.data)
    setChain(makePokeList(evolutionUrl))
  }

  function GetPokemanEvolution() {
    return (
      <ul>
        {chain.map((types, i) => (
          <div key={i}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${types.url
                .substring(42, 47)
                .replace(/\D/g, '')}.png`}
              alt=""
            />
            <p>{types.name}</p>
          </div>
        ))}
      </ul>
    )
  }

  function GetFlavorText() {
    return species !== undefined ? (
      <p>
        {species.flavor_text_entries[0].flavor_text.replace(/\r?\f|\r/, ' ')}
      </p>
    ) : (
      ''
    )
  }

  const depthFirst = getChildren => node => [
    node,
    ...(getChildren(node) || []).flatMap(depthFirst(getChildren))
  ]

  const makePokeList = pokes =>
    depthFirst(node => node.evolves_to)(pokes.chain).map(
      ({ species }) => species
    )

  return (
    <Container>
      <Head>
        <title>Pokedex</title>
      </Head>
      <Header className="red">
        <img src={Pokeball} alt="" />
        <p>
          Tudo o que você queria saber sobre seus monstros de bolso favoritos!
        </p>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search for Pokémon"
        />
        <hr />
        <div>{getPokemonsList(pokemons)}</div>
      </Header>

      {pokeman !== undefined ? (
        <Content>
          <ContentHeader
            title={`#${pokeman.id.toString().padStart(3, '0')} - ${
              pokeman.name
            }`}
            image={''}
          />
          <ContentBody>
            <div className="col">
              <ContentBoxImage bigImage={pokeman.sprites.front_default} />

              <ContentBox>
                <strong>Type</strong>
                {getPokemonsTypes(pokeman)}
              </ContentBox>

              <div className="hw">
                <ContentBox>
                  <strong>Height</strong>
                  <span>{pokeman.height / 10}m</span>
                </ContentBox>
                <ContentBox>
                  <strong>Weight</strong>
                  <span>{pokeman.weight / 10}kg</span>
                </ContentBox>
              </div>

              <ContentBox>
                <div className="stats">
                  <strong>Attributes</strong>
                  {getPokemonsStats(pokeman)}
                </div>
              </ContentBox>
            </div>
            <div className="col">
              <ContentBox>
                <p>evolução</p>
                {GetPokemanEvolution()}
              </ContentBox>
              <ContentBox>
                <p>descrção</p>
                {GetFlavorText()}
              </ContentBox>
            </div>
          </ContentBody>
        </Content>
      ) : (
        <ContentWelcome />
      )}
    </Container>
  )
}

export default Dashboard
