import React from 'react';
import { Home } from './views';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
