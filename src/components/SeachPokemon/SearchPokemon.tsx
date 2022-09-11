import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

interface SearchPokemon {
    color: string
}

const SearchPokemon = (props: SearchPokemon): JSX.Element => {
    const { color } = props

    const [search, setSearch] = useState<string>('');

    return (
        <section id='search-input' style={{ display: 'flex' }}>
            <input
            style={{ margin: '20px 15px', width: '90%', border: '1px solid green', borderRadius: 5 }}
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <div style={{ position: 'absolute', right: 40, top: 20 }}>
            <BsSearch color={'green'} />
        </div>
        </section>
    )
};

export default SearchPokemon;