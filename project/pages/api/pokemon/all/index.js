import { getAllPokemonList } from '../../../../models/pokemon-model';

export default (req, res) => {
    let result = {"error": "Could not find any Pokemons at this time."};
    let pokemon = getAllPokemonList();

    if (pokemon !== null) {
        result = pokemon;
    }

    res.json(result);

}