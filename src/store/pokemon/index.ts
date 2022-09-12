import { Reducer } from "redux";
import { CLEAR_SEARCH, POKEMONM_LOADING, POKEMON_FAIL, POKEMON_SUCCESS, PokemonsState, PokemonDispatchTypes, GET_POKEMON, FOUND_POKEMON, LOAD_POKEMON_LIST, LOADING } from './type.d';

const INITIAL_STATE: PokemonsState = {
    data: [],
    loading: false,
    page: 0,
    search: '',
    error: false,
    pokemon: undefined
}

const reducer: Reducer<PokemonsState> = (state = INITIAL_STATE, action: PokemonDispatchTypes) => {
    switch(action.type) {
        case POKEMONM_LOADING: 
            state = {...state, loading: true};
            break;
        case POKEMON_FAIL:
            state = {...state, loading: false, data: [], error: true};
            break;
        case POKEMON_SUCCESS:
            state = {...state, loading: false, data: action.payload.pokemons};
            break;
        case CLEAR_SEARCH: 
            state = {...state, search: ''};
            break;
        case GET_POKEMON:
            state = {...state, loading: true};
            break;
        case FOUND_POKEMON:
            state = {...state, loading: false, pokemon: action.payload.pokemon};
            break;
        case LOAD_POKEMON_LIST:
            state = {...state, loading: false, pokemon: action.data.pokemon};
            break;
        case LOADING: 
            state = {...state, loading: action.data.loading}
            break;
        default:
            return state;
    }

    return state;
}

export default reducer;