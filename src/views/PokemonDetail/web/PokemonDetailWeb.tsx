import React from 'react';
import { Loading, TypeChip } from '../../../components';
import PokemonAttacks from '../../../components/PokemonAttacks/PokemonAttacks';
import PokemonProps from '../../../components/PokemonProp/PokemonProps';
import { TypeColors } from '../../../constants/types-colors';
import { PokemonsTypes } from '../../../store/pokemon/type';
import PokemonCardItem from '../../../types/pokemon-card';
import './PokemonDetailWeb.sass'

interface PokemonDetailProps {
    pokemon: PokemonCardItem
    loading: boolean
}


const PokemonDetailWeb = (props: PokemonDetailProps) => {
    const { pokemon, loading } = props

    return (
        <section className='screen-section' style={{ backgroundColor: pokemon.colorPokemon}}>
            {loading ? (
                <div className='loading-div' >
                    <Loading />
                </div>
            ) : (
                <>
                    <div className='img-div'>
                        <img src={pokemon.imgPokemon} alt={`${pokemon.nmPokemon}-card`} />
                    </div>
                    <div className='info-div'>
                        <section className='info-section'>
                                Types
                                <div className='first-div'>
                                    {pokemon.tpPokemon.map((item) => <TypeChip key={item.name} color={item.color} type={item.name}/>)}
                                </div>
                                Weakness
                                <div className='props-div'>
                                    {pokemon.fraquezas ? pokemon.fraquezas.map((item) => <PokemonProps key={item.type} color={TypeColors[item.type as PokemonsTypes]} type={item.type} value={item.value} />) : 'None'}
                                </div>
                                Resistances
                                <div className='props-div'>
                                    {pokemon.resistencias ? pokemon.resistencias.map((item) => <PokemonProps key={item.type} color={TypeColors[item.type as PokemonsTypes]} type={item.type} value={item.value} />) : 'None'}
                                </div>
                                Attacks
                                <div className='attack-div'>
                                    {pokemon.ataques ? pokemon.ataques.map((item) => <PokemonAttacks key={item.name} attack={item} />) : 'None'}
                                </div>
                        </section> 
                    </div>
                </>
            )}
        </section>
    )
}

export default PokemonDetailWeb