import { gql } from "apollo-boost";

export const ALL_POKEMONS = gql`
  query {
    allPokemons {
      id
      name
      trainer
      url
    }
  }
`;

export const GET_POKEMON = gql`
  query GetPokemon($id: ID!) {
    Pokemon(id: $id) {
      id
      name
      trainer
      url
    }
  }
`;

export const ADD_POKEMON = gql`
  mutation CreatePokemon($name: String!, $trainer: String!, $url: String!) {
    createPokemon(name: $name, trainer: $trainer, url: $url) {
      id
      name
      trainer
      url
    }
  }
`;

export const DELETE_POKEMON = gql`
  mutation DeletePokemon($id: ID!) {
    deletePokemon(id: $id) {
      id
      name
      trainer
      url
    }
  }
`;
