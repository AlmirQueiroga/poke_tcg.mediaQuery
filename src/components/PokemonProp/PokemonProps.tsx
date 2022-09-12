import React from 'react';
import './PokemonProps.sass'

interface PokemonPropType {
    type: string
    color: string
    value: string
}

const PokemonProps = (props: PokemonPropType): JSX.Element => {
    const { type, color, value } = props

    return (
        <section className='prop-card' style={{ backgroundColor: color }}>
            <b>{type}</b>
            <p>{value}</p>
        </section>
    )
}

export default PokemonProps