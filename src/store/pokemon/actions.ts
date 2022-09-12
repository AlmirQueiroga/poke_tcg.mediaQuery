import { Dispatch, AnyAction } from "redux";
import api from "../../services/api";
import PokemonListItem from "../../types/pokemon-list";
import { TypeColors } from "../../constants/types-colors";
import { CLEAR_SEARCH, PokemonsTypes, POKEMONM_LOADING, POKEMON_FAIL, POKEMON_SUCCESS, PokemonDispatchTypes, GET_POKEMON, FOUND_POKEMON, LOAD_POKEMON_LIST, LOADING } from './type.d';
import PokemonCardItem from "../../types/pokemon-card";
import PokemonType from "../../types/pokemon-type";

export const GetPokemons = (page: number, search: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
        dispatch({
            type: POKEMONM_LOADING,
            data: {
                search: search,
                page: page
            }
        });

        let pokemonsList: PokemonListItem[] = []

        api.get(`/cards?${search ? `q=name:${search} supertype:Pokémon` : ''}`).then((res:any) => {
            pokemonsList = res.data.data.map((card: any) => {
                const pokemonTypes = card.types.map((type: PokemonsTypes) => {
                    return {
                        name: type,
                        color: TypeColors[type]
                    }
                })
                return {
                    idPokemon: card.id,
                    nmPokemon: card.name,
                    tpPokemon: pokemonTypes,
                    imgPokemon: card.images.small,
                }
            })
            dispatch({
                type: POKEMON_SUCCESS,
                payload: {
                    pokemons: pokemonsList
                }
            })
        }).catch(e => dispatch({
            type: POKEMON_FAIL
        }));

}

export const GetPokemon = (id: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    dispatch({
        type: GET_POKEMON,
        data: {
            id: id
        }
    });

    await api.get(`/cards/${id}`).then((res: any) => {
        const data = res.data.data;
        const pokemonTypes: PokemonType[] = data.types.map((type: PokemonsTypes) => ({ name: type, color: TypeColors[type] }))
        const pokemon: PokemonCardItem = {
            idPokemon: data.id,
            nmPokemon: data.name,
            colorPokemon: TypeColors[data.types[0] as PokemonsTypes],
            imgPokemon: data.images.large,
            tpPokemon: pokemonTypes,
            ataques: data.attacks,
            fraquezas: data.weaknesses,
            resistencias: data.resistances
        }

        localStorage.setItem('pokemon', JSON.stringify(pokemon))

        dispatch({
            type: FOUND_POKEMON,
            payload: {
                pokemon: pokemon
            }
        })
    }).catch(e =>  dispatch({
        type: POKEMON_FAIL
    }))
}

export const Loading = (loading: boolean) => (dispatch: Dispatch<PokemonDispatchTypes>) => {
    dispatch({
        type: LOADING,
        data: {
            loading: loading
        }
    });

}

export const LoadPokemon = (pokemon: PokemonCardItem) => (dispatch: Dispatch<PokemonDispatchTypes>) => {
    dispatch({
        type: LOAD_POKEMON_LIST,
        data: {
            pokemon: pokemon
        }
    })

    dispatch({
        type: LOADING,
        data: {
            loading: false
        }
    })
}