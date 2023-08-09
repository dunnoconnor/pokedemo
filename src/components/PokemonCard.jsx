import React from 'react';
import Grid from '@mui/material/Grid'
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';

function PokemonCard({name, id}) {
    return (
    <Grid item xs={4} md={3} lg={2} key={id}>
        <Card sx={{ maxWidth: 240 }}>
            <CardMedia
                sx={{ height: 200, width: 200 }}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                title={name}
            />
            <CardContent>
                <CardActions>
                    <Button>{name}</Button>
                </CardActions>
            </CardContent>
        </Card>

    </Grid>
    );
}

export default PokemonCard;