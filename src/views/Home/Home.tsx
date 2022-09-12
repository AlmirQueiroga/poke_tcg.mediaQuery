import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import useMobile from "../../hooks/useMobile";
import { GetPokemons } from "../../store/pokemon/actions";
import HomeMobile from "./mobile/HomeMobile";
import HomeWeb from "./web/HomeWeb";


const Home = (): JSX.Element => {
	const isMobile = useMobile();
	const loading = useSelector((state: any) => state.PokemonReducer.loading)
	const pokemons = useSelector((state: any) => state.PokemonReducer.data)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch<any>(GetPokemons(0, ''))
	}, [])

	return (
		<div style={{ height: '100vh' }}>
			{pokemons && isMobile ? (<HomeMobile loading={loading} pokemons={pokemons}/>) : (<HomeWeb loading={loading} pokemons={pokemons}/>)}
		</div>
	)
}


export default Home