import { Reducer } from "redux";
import { CLEAR_SEARCH, POKEMONM_LOADING, POKEMON_FAIL, POKEMON_SUCCESS, PokemonsState, PokemonDispatchTypes } from './type.d';

const INITIAL_STATE: PokemonsState = {
    data: [],
    loading: false,
    page: 0,
    search: '',
    error: false
}

const reducer: Reducer<PokemonsState> = (state = INITIAL_STATE, action: PokemonDispatchTypes) => {
    switch(action.type) {
        case POKEMONM_LOADING: 
            return {...state, loading: true};
        case POKEMON_FAIL:
            return {...state, loading: false, data: [], error: true};
        case POKEMON_SUCCESS:
            return {...state, loading: false, data: action.payload.pokemons};
        case CLEAR_SEARCH: 
            return {...state, search: ''}; 
        default:
            return state;
    }
}

export default reducer;