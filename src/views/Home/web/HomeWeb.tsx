import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SearchPokemon } from '../../../components';
import ListCard from '../../../components/ListCard/ListCard';
import Loading from '../../../components/Loading/Loading';
import { GetPokemon } from '../../../store/pokemon/actions';
import PokemonListItem from '../../../types/pokemon-list';
import './HomeWeb.sass'

interface HomeWebProps {
	loading: boolean
    pokemons: PokemonListItem[]
}

const HomeWeb = (props: HomeWebProps) => {
    const { loading, pokemons } = props
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = async (id: string) => {
		await dispatch<any>(GetPokemon(id))
		navigate(`/card/${id}`)
	}

    return (
        <section id='home-list-pokemon-mobile' className='home-section' >
            <SearchPokemon color={'green'}/>
            {
                loading ? (
                    <div className='loading-div'>
                        <Loading />
                    </div>
                ) : (
                    <section id='home-list-pokemon-web' style={{ height: '100%', display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
                        {pokemons.map((pokemon: PokemonListItem) => <ListCard key={pokemon.idPokemon} pokemonData={pokemon} onClick={() => handleClick(pokemon.idPokemon)}/>)}
                    </section>
                )
            }
        </section>
    )
}

export default HomeWeb