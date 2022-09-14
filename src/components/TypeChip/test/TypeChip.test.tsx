import React from 'react'
import { render, screen } from '@testing-library/react'
import TypeChip from '../TypeChip'

describe('Ficha de tipo', () => {
    it('Exibir tipo do pokemon especifico',  ()=>{
        render(<TypeChip color='green' type='grass'/>)

        const color = screen.getByTestId('test-color')
        const tipo = screen.getByTestId('test-type')

        expect(color).toBe('green')
        expect(tipo).toBe('grass')

    })

})