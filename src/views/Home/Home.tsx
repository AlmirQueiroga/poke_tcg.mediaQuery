import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux'
import useMobile from "../../hooks/useMobile";
import { ApplicationState } from "../../store";
import { ClearSearch, GetPokemons } from "../../store/pokemon/actions";
import { PokemonDispatchTypes } from "../../store/pokemon/type";
import HomeMobile from "./mobile/HomeMobile";


const Home = (): JSX.Element => {
	const isMobile = useMobile();
	const pokemons = useSelector((state: any) => state.PokemonReducer.data)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch<any>(GetPokemons(0, ''))
	}, [dispatch])
	return (
		<div style={{ height: '100vh' }}>
			{isMobile ? (<HomeMobile />) : (<p>web</p>)}
		</div>
	)
}


export default Home