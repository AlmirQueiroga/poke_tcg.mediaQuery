import React from 'react';
import { Home, PokemonDetail } from './views';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider} from 'react-redux';
import './App.css'

//import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/card/:id' element={<PokemonDetail />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
