import React from 'react';
import { Card } from '@mui/material';

function PokemonProfile({pokemon}) {
    return (
    <Card sx={{ maxWidth:360 }}>
        <img width="300" height="300" src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} alt={pokemon.name}/>
        <h1>{pokemon.name}</h1>
        <p>height: {pokemon.height}</p>
        <p>weight: {pokemon.weight}</p>
        <div>
          <p>abilities:</p>
          <ul>
            {pokemon.abilities.map((ability) => (
              <li key={ability.ability.name}>
                <span>{ability.ability.name}</span>
              </li>
            ))}
          </ul>
        </div>
  
        <div>
          <p>types:</p>
          <ul>
            {pokemon.types.map((type) => (
              <li key={type.type.name}>
                <span>{type.type.name}</span>
              </li>
            ))}
          </ul>
        </div>
  
        <div>
          <p>stats:</p>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                <span>{stat.stat.name}: </span>
                <span>{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    );
}

export default PokemonProfile;