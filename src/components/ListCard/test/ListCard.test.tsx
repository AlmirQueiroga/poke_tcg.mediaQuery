import React from 'react'
import { render, screen } from '@testing-library/react'
import ListCard from '../ListCard'

describe('Lista de cartas', ()=>{
    it('Lista de cartas com tipo',  ()=>{
        render(<ListCard pokemonData={{ colorPokemon: 'Green', imgPokemon: 'https:/', nmPokemon: '5', idPokemon: 'x1-1s1', tpPokemon: [{ name: 'Grass', color: 'Green' }] }} onClick={function (): void {
            throw new Error('Function not implemented.')
        } }/>)
        
    })
})