import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import PokemonAttacks from '../PokemonAttacks'

describe('Attacks', () => {
    it('Exibir attacks com modal',  ()=>{
        render(<PokemonAttacks attack={{name: 'tackel', cost:['Grass', 'Water'], convertedEnergyCost:10, damage:'10', text: 'a lot of damage'}}/>)

        const name = screen.getByTestId('test-display-name')
        const cost = screen.getByTestId('test-modal-cost')
        const energycost = screen.getByTestId('test-modal-energy-cost')
        const convenergycost = screen.getByTestId('test-modal-conv-energy-cost')
        const damage = screen.getByTestId('test-modal-damage')
        const text = screen.getByTestId('test-modal-text')

        expect(name).toBe('tackel')
        expect(cost).not.toBeInTheDocument()
        expect(energycost).not.toBeInTheDocument()
        expect(convenergycost).not.toBeInTheDocument()
        expect(damage).not.toBeInTheDocument()
        expect(text).not.toBeInTheDocument()

        fireEvent.click(name)

        expect(cost).toBe('tackel')
        expect(energycost).toBe(['Grass', 'Water'])
        expect(convenergycost).toBe(10)
        expect(damage).toBe('10')
        expect(text).toBe('a lot of damage')


    })

})