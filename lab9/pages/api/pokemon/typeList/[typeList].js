import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = {"error": "Could not find a Pokemon with this Type."};

    const type={type: req.query.typeList};

    let pokemon=getPokemon(type);

    if(pokemon !== null) {
        result = pokemon;
    }

    res.json(result);

}