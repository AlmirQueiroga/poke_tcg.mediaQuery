import React from 'react'
import { render, screen } from '@testing-library/react'
import ListCard from '../ListCard'
import TypeChip from '../../TypeChip/TypeChip'


describe('Lista de cartas', ()=>{
    it('Lista de cartas com tipo',  ()=>{
        render(<ListCard pokemonData={{ colorPokemon: 'Green', imgPokemon: 'https:/', nmPokemon: '5', idPokemon: 'x1-1s1', tpPokemon: [{ name: 'Grass', color: 'Green' }] }} onClick={function (): void {
            throw new Error('Function not implemented.')
        } }/>)
        
        const imgcard = screen.getByRole('img')
        expect(imgcard).toHaveAttribute('src', 'https:/')
        expect(imgcard).toHaveAttribute('alt', '5')

    })
    it('Exibir tipo do pokemon especifico',  ()=>{
        render(<TypeChip color='green' type='grass'/>)

        const color = screen.getByTestId('test-color')
        const tipo = screen.getByTestId('test-type')

        expect(color).toBe('green')
        expect(tipo).toBe('grass')

    })
})