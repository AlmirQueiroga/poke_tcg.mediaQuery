import PokemonCardItem from "../../types/pokemon-card";
import PokemonListItem from "../../types/pokemon-list";

export const POKEMONM_LOADING = 'POKEMON_LOADING';
export const GET_POKEMON = 'GET_POKEMON';
export const FOUND_POKEMON = 'FOUND_POKEMON';
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';
export const POKEMON_FAIL = 'POKEMON_FAIL';
export const LOADING = 'LOADING';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const LOAD_POKEMON_LIST = "LOAD_POKEMON_LIST";

interface PokemonLoading {
    type: typeof POKEMONM_LOADING,
    data?: {
        search: string,
        page: number
    }
}

interface LoadPokemonList {
    type: typeof LOAD_POKEMON_LIST,
    data: {
        pokemon: PokemonCardItem
    }
}

interface GetPokemon {
    type: typeof GET_POKEMON,
    data: {
        id: string
    }
}

interface FoundPokemon {
    type: typeof FOUND_POKEMON,
    payload: {
        pokemon: PokemonCardItem
    }
}

interface PokemonFail {
    type: typeof POKEMON_FAIL
}

interface ClearSearch {
    type: typeof CLEAR_SEARCH,
}

interface HandleSearch {
    type: typeof LOADING,
    data: {
        loading: boolean
    }
}

interface PokemonSuccess {
    type: typeof POKEMON_SUCCESS,
    payload: {
        pokemons: PokemonListItem[]
    }
}

export type PokemonsTypes = "Colorless" | "Darkness" | "Dragon" | "Fairy" | "Fighting" | "Fire" | "Grass" | "Lightning" | "Metal" | "Psychic" | "Water";

export type PokemonDispatchTypes = PokemonLoading | PokemonSuccess | ClearSearch | PokemonFail | HandleSearch | GetPokemon | FoundPokemon | LoadPokemonList

export interface PokemonsState {
    readonly data: PokemonListItem[]
    readonly loading: boolean,
    readonly pokemon?: PokemonCardItem
    page: number,
    search: string,
    error: boolean
}