import { Dispatch, AnyAction } from "redux";
import api from "../../services/api";
import PokemonListItem from "../../types/pokemon-list";
import { TypeColors } from "../../constants/types-colors";
import { CLEAR_SEARCH, HANDLE_SEARCH, POKEMONM_LOADING, POKEMON_FAIL, POKEMON_SUCCESS, PokemonDispatchTypes } from './type.d';

type PokemonsTypes = "Colorless" | "Darkness" | "Dragon" | "Fairy" | "Fighting" | "Fire" | "Grass" | "Lightning" | "Metal" | "Psychic" | "Water";

export const GetPokemons = (page: number, search: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
        dispatch({
            type: POKEMONM_LOADING,
            data: {
                search: search,
                page: page
            }
        });

        let pokemonsList: PokemonListItem[] = []

        await api.get(`/cards?name=${search},pageSize:30`).then((res:any) => {
            console.log(res)
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

        console.log('a lista ai', pokemonsList)
}

export const ClearSearch = (dispatch: Dispatch<PokemonDispatchTypes>) => {
    dispatch({
        type: CLEAR_SEARCH
    });

}