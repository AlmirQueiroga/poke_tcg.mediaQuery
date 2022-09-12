import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { GetPokemons } from '../../store/pokemon/actions';

interface SearchPokemonPorps {
    color: string
}


const SearchPokemon = (props: SearchPokemonPorps): JSX.Element => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState<string>('');
    const [search, setSearch] = useState<boolean>(false);
    const { color } = props

    return (
        <section id='search-input' style={{ display: 'flex' }}>
            <input
            style={{ margin: '20px 15px', width: '90%', border: '1px solid green', borderRadius: 5 }}
            placeholder='Search'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
        />
        <div style={{ position: 'absolute', right: 40, top: 20 }}>
            <BsSearch color={color} onClick={() => dispatch<any>(GetPokemons(0, searchValue))} style={{ cursor: 'pointer' }}/>
        </div>
        </section>
    )
};

export default SearchPokemon;