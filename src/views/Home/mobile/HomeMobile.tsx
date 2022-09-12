import React from "react";
import { useDispatch } from "react-redux";
import { Carousel } from 'react-bootstrap';
import { SearchPokemon, TypeChip } from "../../../components";
import PokemonListItem from "../../../types/pokemon-list";
import Loading from "../../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { GetPokemon } from "../../../store/pokemon/actions";

interface HomeMobileProps {
	loading: boolean
	pokemons: PokemonListItem[]
}

const HomeMobile = (props: HomeMobileProps): JSX.Element => {
	const { loading, pokemons } = props
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleClick = async (id: string) => {
		await dispatch<any>(GetPokemon(id))
		navigate(`/card/${id}`)
	}

	return (
		<section id='home-list-pokemon-mobile' style={{ height: '100%' }}>
			<SearchPokemon color={'green'}/>
			{loading ? (
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
					<Loading />
				</div>
			) : (
				<Carousel indicators={false} style={{ height: '100%' }}>
				{pokemons.length ? pokemons.map((pokemon: PokemonListItem, index: number) => {
					return (
						(
							<Carousel.Item key={index} onClick={() => handleClick(pokemon.idPokemon)}  style={{ flex: 1, height: '100%', marginTop: '10%' }}>
								<div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
									<img alt={`${pokemon.nmPokemon}-card`} src={pokemon.imgPokemon} style={{ height: '50%', width: '70%', borderRadius: 15, boxShadow: '0px 8px 8px -3px rgba(0, 0, 0, 0.7)', margin: '5px 10px' }}/>
									<p>{pokemon.idPokemon}</p>
									<h2>{pokemon.nmPokemon}</h2>
									<section id={`${pokemon.nmPokemon}-types`} style={{ display: 'flex' }}>
										{pokemon.tpPokemon.map((type,index) => (<div key={index}><TypeChip color={type.color} type={type.name}/></div>))}
									</section>
								</div>
							</Carousel.Item>
						)
					)
				}) : (
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
						Search Not Found
						<img src={require('../../../assets/pikachu_404.png')} style={{ height: '60%', width: '60%' }}/>
					</div>
				)}
			</Carousel>
			)}
		</section>
	);
}

export default HomeMobile