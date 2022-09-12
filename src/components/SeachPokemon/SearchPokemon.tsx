import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { GetPokemons } from '../../store/pokemon/actions';

import './SearchPokemon.sass'

interface SearchPokemonPorps {
    color: string
}


const SearchPokemon = (props: SearchPokemonPorps): JSX.Element => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState<string>('');
    const { color } = props

    return (
        <section id='search-input' className='search-bar'>
            <input
                placeholder='Search'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <div>
                <BsSearch color={color} onClick={() => dispatch<any>(GetPokemons(0, searchValue))} style={{ cursor: 'pointer' }}/>
            </div>
        </section>
    )
};

export default SearchPokemon;