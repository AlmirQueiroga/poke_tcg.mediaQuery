import React from 'react';
import { TypeChip, Loading } from '../../../components';
import PokemonAttacks from '../../../components/PokemonAttacks/PokemonAttacks';
import PokemonProps from '../../../components/PokemonProp/PokemonProp';
import { TypeColors } from '../../../constants/types-colors';
import { PokemonsTypes } from '../../../store/pokemon/type';
import PokemonCardItem from '../../../types/pokemon-card';
import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';


interface PokemonDetailProps {
    pokemon: PokemonCardItem
    loading: boolean
}

const PokemonDetailMobile = (props: PokemonDetailProps) => {
    const { pokemon, loading } = props
    const navigate = useNavigate()

    return (
        <section style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', padding: '0px 20px 20px 20px', flexDirection: 'column', backgroundColor: pokemon ? pokemon.colorPokemon : undefined }}>
            {loading ? (
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
					<Loading />
				</div>
			) : (
                <>
                    <div style={{ display: 'flex', width: '100%', marginBottom: 10 }}>
                        <IoMdArrowBack style={{ color: '#FFF', height: 30, width: 30 }} onClick={() => navigate('/')} />
                    </div>
                    <span style={{ color: '#FFF', alignSelf: 'flex-start' }}>{pokemon.idPokemon}</span>
                    <h2 style={{ color: '#FFF', alignSelf: 'flex-start' }}>{pokemon.nmPokemon}</h2>
                    <img src={pokemon.imgPokemon} style={{ width: '100%' }}/>
                    <section style={{ padding: 20, backgroundColor: '#FFF', borderRadius: 10, marginTop: 20, width: '100%' , fontSize: 20, fontWeight: 700, boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.7)' }}>
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
                </>
            )}
        </section>
    )
};

export default PokemonDetailMobile