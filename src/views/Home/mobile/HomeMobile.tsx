import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Carousel } from 'react-bootstrap';
import { SearchPokemon, TypeChip } from "../../../components";
import PokemonListItem from "../../../types/pokemon-list";
import Loading from "../../../components/Loading/Loading";


const HomeMobile = (): JSX.Element => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const loading = useSelector((state: any) => state.PokemonReducer.loading)
	const pokemons = useSelector((state: any) => state.PokemonReducer.data)

	return (
		<section id='home-list-pokemon-mobile' style={{ height: '100%' }}>
			<SearchPokemon color={'green'}/>
			{loading ? (
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
					<Loading />
				</div>
			) : (
				<Carousel indicators={false} style={{ height: '100%' }}>
				{pokemons.map((pokemon: PokemonListItem, index: number) => (
					<Carousel.Item tabIndex={index} key={`${pokemon.nmPokemon}-${index}`}  style={{ flex: 1, height: '100%', marginTop: '10%' }}>
						<div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
							<img alt={`${pokemon.nmPokemon}-image`} src={pokemon.imgPokemon} style={{ height: '50%', width: '70%', borderRadius: 15, boxShadow: '0px 8px 8px -3px rgba(0, 0, 0, 0.7)', margin: '5px 10px' }}/>
							<p>{pokemon.idPokemon}</p>
							<h2 style={{ fontFamily: 'Gill Sans' }}>{pokemon.nmPokemon}</h2>
							<section id={`${pokemon.nmPokemon}-types`} style={{ display: 'flex' }}>
								{pokemon.tpPokemon.map(type => (<TypeChip color={type.color} type={type.name}/>))}
							</section>
						</div>
					</Carousel.Item>
				))}
			</Carousel>
			)}
		</section>
	);
}

export default HomeMobile