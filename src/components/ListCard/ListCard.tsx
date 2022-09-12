import React from 'react';
import PokemonListItem from '../../types/pokemon-list';
import TypeChip from '../TypeChip/TypeChip';

import './ListCard.sass'

interface PokemonListCardProps {
    pokemonData: PokemonListItem
    onClick: () => void
}

const ListCard = (props: PokemonListCardProps) => {
    const { pokemonData, onClick } = props

    return (
        <section id={`${pokemonData.nmPokemon}-card`} onClick={() => onClick()} className='card-block'>
            <div className='card' style={{ backgroundColor: pokemonData.tpPokemon[0].color }}>
                <div className='card-info'>
                    <img alt={`${pokemonData.nmPokemon}`} src={pokemonData.imgPokemon} />
                    <p>{pokemonData.idPokemon}</p>
                    <h2>{pokemonData.nmPokemon}</h2>
                    <section id={`${pokemonData.nmPokemon}-types`}>
                        {pokemonData.tpPokemon.map((type) => (<TypeChip key={type.name} color={type.color} type={type.name}/>))}
                    </section>
                </div>
            </div>
        </section>
    )
};

export default ListCard