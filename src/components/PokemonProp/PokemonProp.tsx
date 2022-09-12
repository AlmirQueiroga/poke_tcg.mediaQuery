import React from 'react';

interface PokemonPropType {
    type: string
    color: string
    value: string
}

const PokemonProps = (props: PokemonPropType): JSX.Element => {
    const { type, color, value } = props

    return (
        <section id={``} style={{ margin: '0 10px', borderRadius: 10, backgroundColor: color, padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFF', flexDirection: 'column', boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.7)' }}>
            <b>{type}</b>
            <p style={{ margin: 0 }}>{value}</p>
        </section>
    )
}

export default PokemonProps