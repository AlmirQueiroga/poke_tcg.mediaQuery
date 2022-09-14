import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import api from './services/api'
import { GetPokemons } from './store/pokemon/actions';

jest.mock('./api')

describe('Requisições para API', () => {
  it('should return empty Map when axios.get failed', async () => {
    const getError = new Error('network error');
    api.get = jest.fn().mockRejectedValue(getError);
    const actualValue = GetPokemons(1, '')
    expect(actualValue).toEqual(new Map());
    expect(api.get).toBeCalledWith('/cards?q=name: supertype:Pokémon');
  })

  it('should return users', async () => {
    const mockedUsers = [{ userId: 1 }];
    api.get = jest.fn().mockResolvedValue(mockedUsers);
    const actualValue = GetPokemons(1, '')
    expect(actualValue).toEqual(mockedUsers);
    expect(api.get).toBeCalledWith('/cards?q=name: supertype:Pokémon');
  })

  render(<App />)
})
