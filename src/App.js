import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PokemonCard from './components/PokemonCard';
import { useEffect,useState } from 'react';

const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
      fetch(pokemonAPI)
      .then(response => response.json())
      .then(data => {
          setPokemon(data.results);
      })
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
          {pokemon.map((p,i) =>
          <PokemonCard name={p.name} id={i+1}/>
              )}
          </Grid>
        </Box>
      </div>
  </ThemeProvider>
  );
}

export default App;
