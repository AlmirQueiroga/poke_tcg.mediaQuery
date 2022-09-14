import React from 'react'
import { render, screen } from '@testing-library/react'
import PokemonProps from '../PokemonProps'


describe('Propriedades de combate', () => {
    it('Exibir propriedades de combate',  ()=>{
        render(<PokemonProps color={'green'} type={'grass'} value={'2x'} />)

        const color = screen.getByTestId('test-color')
        const tipo = screen.getByTestId('test-type')
        const value = screen.getByTestId('test-value')

        expect(color).toBe('green')
        expect(tipo).toBe('grass')
        expect(value).toBe('2x')
    })

})