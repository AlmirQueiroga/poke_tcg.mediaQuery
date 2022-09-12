import React from 'react';
import PokemonListItem from '../../types/pokemon-list';
import TypeChip from '../TypeChip/TypeChip';

interface PokemonListCardProps {
    pokemonData: PokemonListItem
    onClick: () => void
}

const ListCard = (props: PokemonListCardProps) => {
    const { pokemonData, onClick } = props

    return (
        <section id={`${pokemonData.nmPokemon}-card`} onClick={() => onClick()} style={{ width: '100%', padding: '10px', display: 'flex' }}>
            <div style={{ flex: 1, backgroundColor: pokemonData.tpPokemon[0].color, borderRadius: 20 }}>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img alt={`${pokemonData.nmPokemon}-image`} src={pokemonData.imgPokemon} style={{ height: '50%', width: '70%', borderRadius: 15, boxShadow: '0px 8px 8px -3px rgba(0, 0, 0, 0.7)', margin: '5px 10px' }}/>
                <p>{pokemonData.idPokemon}</p>
                <h2 style={{ fontFamily: '700', color: '#FFF' }}>{pokemonData.nmPokemon}</h2>
                <section id={`${pokemonData.nmPokemon}-types`} style={{ display: 'flex' }}>
                    {pokemonData.tpPokemon.map((type, index) => (<TypeChip color={type.color} type={type.name}/>))}
                </section>
            </div>
            </div>
        </section>
    )
};

export default ListCard