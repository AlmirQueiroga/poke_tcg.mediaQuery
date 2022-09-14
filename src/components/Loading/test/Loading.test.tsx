import React from 'react'
import { render, screen } from '@testing-library/react'
import Loading from '../Loading';

describe('Loading Pokeball', () => {
    it('img must have src and classname', () => {
      render(<Loading/>);
      const pokeball = screen.getByRole('img');
      expect(pokeball).toHaveAttribute('src', require('../../assets/pokeball.png'));
      expect(pokeball).toHaveAttribute('className', 'loading');
    })
  })