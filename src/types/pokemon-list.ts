import PokemonType from "./pokemon-type";

interface PokemonListItem {
    idPokemon: string;
    nmPokemon: string;
    tpPokemon: PokemonType[];
    imgPokemon: string;
    colorPokemon: string;
};

export default PokemonListItem