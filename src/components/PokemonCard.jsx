import React from 'react';
import Grid from '@mui/material/Grid'
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

function PokemonCard({name, id}) {
    return (
    <Grid item xs={4} md={3} lg={2}>
        <Card sx={{ maxWidth: 240 }}>
            <CardMedia
                sx={{ height: 200, width: 200 }}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                title={name}
            />
            <CardContent>
                <CardActions>
                    <Link className='link' to={name}>{name}</Link>
                </CardActions>
            </CardContent>
        </Card>

    </Grid>
    );
}

export default PokemonCard;