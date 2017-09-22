import Reflux from 'reflux';
import Actions from '../actions/Actions';
import * as HTTP from '../services/http';

class PokemonStore extends Reflux.Store {
    constructor() {
        super();

        this.listenables = Actions;

        this.state = {
            data: [],
            dataPokemon: {
                types: []
            }
        }
    }

    getPokemons() {
        const self = this;
        HTTP.json().then((response) => {
            self.setState({ data: response });
        });
    }

    getPokemon(name) {
        const self = this;

        HTTP.get('http://pokeapi.co/api/v1/pokemon/' + name).then((response) => {
            self.setState({ dataPokemon: response });
        });
    }
}

export default PokemonStore;
