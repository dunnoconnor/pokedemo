import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { PokemonList, loader} from './routes/PokemonList';

import { PokemonDetails, detailsLoader } from './routes/PokemonDetails'

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<PokemonList />} loader={loader}  />
      <Route path='/:name' element={<PokemonDetails />} loader={detailsLoader} />
    </Route>
  )
);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router}/>
  </ThemeProvider>
  );
}

export default App;
