import PokemonAttack from "./pokemon-attack";
import PokemonListItem from "./pokemon-list";
import PokemonProperties from "./pokemon-props";


interface PokemonCardItem extends PokemonListItem {
    resistencias: PokemonProperties[];
    fraquezas: PokemonProperties[];
    ataques: PokemonAttack[];
};

export default PokemonCardItem;