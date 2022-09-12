import React from 'react';
import { TypeChip, Loading } from '../../../components';
import PokemonAttacks from '../../../components/PokemonAttacks/PokemonAttacks';
import PokemonProps from '../../../components/PokemonProp/PokemonProps';
import { TypeColors } from '../../../constants/types-colors';
import { PokemonsTypes } from '../../../store/pokemon/type';
import PokemonCardItem from '../../../types/pokemon-card';
import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import './PokemonDetailMobile.sass'

interface PokemonDetailProps {
    pokemon: PokemonCardItem
    loading: boolean
}

const PokemonDetailMobile = (props: PokemonDetailProps) => {
    const { pokemon, loading } = props
    const navigate = useNavigate()

    return (
        <section className='screen-section' style={{ backgroundColor: pokemon ? pokemon.colorPokemon : undefined }}>
            {loading ? (
				<div className='loading-div'>
					<Loading />
				</div>
			) : (
                <>
                    <div className='back-arrow'>
                        <IoMdArrowBack style={{ color: '#FFF', height: 30, width: 30 }} onClick={() => navigate('/')} />
                    </div>
                    <span className='details-span'>{pokemon.idPokemon}</span>
                    <h2 className='details-span'>{pokemon.nmPokemon}</h2>
                    <img alt={`${pokemon.nmPokemon}-card`} src={pokemon.imgPokemon} style={{ width: '100%' }}/>
                    <section className='details-section'>
                            Types
                            <div className='first-div'>
                                {pokemon.tpPokemon.map((item, index) => <TypeChip color={item.color} type={item.name}/>)}
                            </div>
                            Weakness
                            <div className='props-div'>
                                {pokemon.fraquezas ? pokemon.fraquezas.map((item, index) => <PokemonProps color={TypeColors[item.type as PokemonsTypes]} type={item.type} value={item.value} />) : 'None'}
                            </div>
                            Resistances
                            <div className='props-div'>
                                {pokemon.resistencias ? pokemon.resistencias.map((item, index) => <PokemonProps color={TypeColors[item.type as PokemonsTypes]} type={item.type} value={item.value} />) : 'None'}
                            </div>
                            Attacks
                            <div className='attacks-div'>
                                {pokemon.ataques ? pokemon.ataques.map((item, index) => <PokemonAttacks attack={item} />) : 'None'}
                            </div>
                    </section> 
                </>
            )}
        </section>
    )
};

export default PokemonDetailMobile