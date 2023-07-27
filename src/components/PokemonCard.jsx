import React from 'react';
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material';

function PokemonCard({name, id}) {
    return (
    <Grid item xs={4} key={id}>
        <Typography variant="p">{name}</Typography>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}></img>
    </Grid>
    );
}

export default PokemonCard;