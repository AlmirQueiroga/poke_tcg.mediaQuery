import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import PokemonReducer from './pokemon'
import { PokemonsState } from './pokemon/type';

const rootReducers = combineReducers({
    PokemonReducer
});

export interface ApplicationState {
    pokemons: PokemonsState,
    page: 0
}

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof rootReducers>

export default store;