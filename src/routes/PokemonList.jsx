import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PokemonCard from '../components/PokemonCard';
import { useLoaderData } from 'react-router-dom';
import React from 'react';


async function loader() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150');
    const pokemonData = await response.json();  
    return pokemonData.results;
}

function PokemonList() {
    const pokemonList = useLoaderData();

    
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
          {pokemonList.map((p,i) =>
          <PokemonCard name={p.name} id={i+1} key={i}/>
              )}
          </Grid>
        </Box>
    );
}

export { PokemonList, loader };