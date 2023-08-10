import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import PokemonProfile from '../components/PokemonProfile';

async function detailsLoader({ params }) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
    const pokemonData = await response.json();  
    return pokemonData;
}

function PokemonDetails() {
    const params = useParams();
    const pokemon = useLoaderData();
  
    if (!pokemon) {
      return <>loading...</>;
    }
  
    return (
      <PokemonProfile pokemon={pokemon}/>
    );
}
export { PokemonDetails, detailsLoader };