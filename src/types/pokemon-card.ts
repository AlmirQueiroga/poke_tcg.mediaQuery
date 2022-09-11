import PokemonListItem from "./pokemon-list";

interface PokemonCardItem extends PokemonListItem {
    resistencias: string[];
    fraquezas: string[];
    ataques: string[];
};

export default PokemonCardItem;