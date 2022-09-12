import React from 'react';
import { Loading, TypeChip } from '../../../components';
import PokemonAttacks from '../../../components/PokemonAttacks/PokemonAttacks';
import PokemonProps from '../../../components/PokemonProp/PokemonProp';
import { TypeColors } from '../../../constants/types-colors';
import { PokemonsTypes } from '../../../store/pokemon/type';
import PokemonCardItem from '../../../types/pokemon-card';

interface PokemonDetailProps {
    pokemon: PokemonCardItem
    loading: boolean
}


const PokemonDetailWeb = (props: PokemonDetailProps) => {
    const { pokemon, loading } = props

    console.log('pq diabos essa porra nao vem?', pokemon)

    return (
        <section style={{ flex: 1, display: 'flex', backgroundColor: pokemon.colorPokemon, maxHeight: '100vh', padding: '20px'}}>
            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Loading />
                </div>
            ) : (
                <>
                    <div style={{ flex: 1 }}>
                        <img src={pokemon.imgPokemon} style={{ height: '90%', margin: '10px' }}/>
                    </div>
                    <div style={{ flex: 3, justifyContent: 'center' }}>
                    <section style={{ padding: 20, backgroundColor: '#FFF', borderRadius: 10, marginTop: '20%', width: '100%' , fontSize: 20, fontWeight: 700, boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.7)' }}>
                            Types
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {pokemon.tpPokemon.map((item, index) => <TypeChip color={item.color} type={item.name}/>)}
                            </div>
                            Weakness
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 20, fontWeight: 700 }}>
                                {pokemon.fraquezas ? pokemon.fraquezas.map((item, index) => <PokemonProps color={TypeColors[item.type as PokemonsTypes]} type={item.type} value={item.value} />) : 'None'}
                            </div>
                            Resistances
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 20, fontWeight: 700 }}>
                                {pokemon.resistencias ? pokemon.resistencias.map((item, index) => <PokemonProps color={TypeColors[item.type as PokemonsTypes]} type={item.type} value={item.value} />) : 'None'}
                            </div>
                            Attacks
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: 20, fontWeight: 700 }}>
                                {pokemon.ataques ? pokemon.ataques.map((item, index) => <PokemonAttacks attack={item} />) : 'None'}
                            </div>
                    </section> 
                    </div>
                </>
            )}
        </section>
    )
}

export default PokemonDetailWeb