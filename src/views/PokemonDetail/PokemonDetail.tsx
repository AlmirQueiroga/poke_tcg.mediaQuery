import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import useMobile from '../../hooks/useMobile';
import { GetPokemon, LoadPokemon } from '../../store/pokemon/actions';
import PokemonDetailMobile from './mobile/PokemonDetailMobile';
import PokemonDetailWeb from './web/PokemonDetailWeb';
import { Loading as LoadingAction } from '../../store/pokemon/actions';

const PokemonDetail = () => {
    const isMobile = useMobile();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector((state: any) => state.PokemonReducer.loading)
    const pokemon = useSelector((state: any) => state.PokemonReducer.pokemon)

    useEffect(() => {
        dispatch<any>(LoadingAction(true))
        const pokemonStorage = localStorage.getItem('pokemon')
        if (pokemonStorage) dispatch<any>(LoadPokemon(JSON.parse(pokemonStorage)))
        else if (pokemon === undefined) navigate('/')
    }, [])

    return (
       <>
        {pokemon !== undefined && (
             <div style={{ minHeight: '100vh', display: 'flex' }}>
             {isMobile ? 
                 (<PokemonDetailMobile pokemon={pokemon} loading={loading}/>) 
                 : 
                 (<PokemonDetailWeb pokemon={pokemon} loading={loading}/>)
             }
         </div>
        )}
       </>
    )
}

export default PokemonDetail