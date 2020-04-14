import { getRandomPokemon } from '../../../../models/pokemon-model';

export default (req, res) => {
    let result = {"error": "Could not find Pokemon with this Name."};
    let pokemon = getRandomPokemon();

    if (pokemon !== null) {
        result = pokemon;
    }

    res.json(result);

}