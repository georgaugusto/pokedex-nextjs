import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'

import {
  Container,
  Header,
  Content,
  ContentHeader,
  ContentHeaderTitle,
  ContentBody,
  ContentBox
} from '../../styles/Dashboard/styles'

import Pokeball from '../../assets/logo-pokedex.png'

import TypeDataBox from '../../components/TypeDataBox'

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

const Dashboard: React.FC<void> = () => {
  const [pokemons, setPokemons] = useState<IPokedex[]>([])
  const [pokeman, setPokeman] = useState<IPokemon>()
  const [search, setSearch] = useState('')

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
    setPokeman(pokeman)
  }

  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value)
  }

  return (
    <Container>
      <Head>
        <title>Pokedex</title>
      </Head>
      <Header>
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
        <div>
          {pokemons.map((pokemon, i) => {
            if (
              search === '' ||
              search.includes(pokemon.name) ||
              search === pokemon.url.slice(34, 37).replace('/', '')
            ) {
              return (
                <span
                  key={i}
                  // onClick={() => console.log(`${i + 1} - ${pokemon.name}`)}
                  onClick={() => loadPokemon(i + 1)}
                >
                  #{(i + 1).toString().padStart(3, '0')} - {pokemon.name}
                </span>
              )
            }
          })}
        </div>
      </Header>

      {pokeman !== undefined ? (
        <Content>
          <ContentHeader>
            <ContentHeaderTitle>
              <h1>
                #{pokeman.id.toString().padStart(3, '0')} - {pokeman.name}
              </h1>
              <img src={pokeman.sprites.front_default} alt="" />
            </ContentHeaderTitle>
            <div>
              <p>claro - escuro</p>
            </div>
          </ContentHeader>
          <ContentBody>
            <div className="col">
              <ContentBox>
                <img
                  className="img"
                  src={pokeman.sprites.front_default}
                  alt=""
                />
              </ContentBox>

              <ContentBox>
                <strong>Type</strong>
                {pokeman.types.map((types, i) => {
                  return (
                    <TypeDataBox color={types.type.name} key={i}>
                      {types.type.name}
                    </TypeDataBox>
                  )
                })}
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
                  <div>
                    {pokeman.stats.map((stats, i) => {
                      return (
                        <span key={i}>
                          {stats.base_stat} {stats.stat.name.substring(0, 5)}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </ContentBox>
            </div>
            <div className="col">
              <ContentBox>
                <p>evolução</p>
              </ContentBox>
              <ContentBox>
                <p>descrção</p>
              </ContentBox>
            </div>
          </ContentBody>
        </Content>
          ) : (
        <Content>
          <ContentHeader>
            <ContentHeaderTitle>
              <h1>Bem vindo, selecione seu pokemon preferido</h1>
            </ContentHeaderTitle>
          </ContentHeader>
        </Content>
          )}
    </Container>
  )
}

export default Dashboard
