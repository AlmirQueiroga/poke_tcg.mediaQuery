import PokemonListItem from "../../types/pokemon-list";

export const POKEMONM_LOADING = 'POKEMON_LOADING';
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';
export const POKEMON_FAIL = 'POKEMON_FAIL';
export const HANDLE_SEARCH = 'HANDLE_SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

interface PokemonLoading {
    type: typeof POKEMONM_LOADING,
    data?: {
        search: string,
        page: number
    }
}

interface PokemonFail {
    type: typeof POKEMON_FAIL
}

interface ClearSearch {
    type: typeof CLEAR_SEARCH,
}

interface HandleSearch {
    type: typeof HANDLE_SEARCH,
    data: {
        search: string,
        page: number
    }
}

interface PokemonSuccess {
    type: typeof POKEMON_SUCCESS,
    payload: {
        pokemons: PokemonListItem[]
    }
}

export type PokemonDispatchTypes = PokemonLoading | PokemonSuccess | ClearSearch | PokemonFail | HandleSearch

export interface PokemonsState {
    readonly data: PokemonListItem[]
    readonly loading: boolean,
    page: number,
    search: string,
    error: boolean
}