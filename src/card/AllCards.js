import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card.js';
import './AllCards.css';

function AllCards() {

    localStorage.setItem('pesquisou', 'false');
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=15');
    const [nextPage, setNextPage] = useState(null);
    const [previusPage, setPreviusPage] = useState(null);


    const getAllPokemon = async (url) => {
        localStorage.removeItem('pesquisou');
        localStorage.setItem('pesquisou', 'true');
        const result = await axios.get(url);

        const getPokemon = async (res) => {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${res}`);
            setPokemons(state => {
                state = [...state, result.data];
                return state;
            });
        }

        result.data.results.map((pokemon) => getPokemon(pokemon.name));
        setNextPage(result.data.next);
        setPreviusPage(result.data.previous);
        setLoading(false);
    }

    useEffect(() => {
        if (localStorage.getItem('pesquisou') === 'false') {
            getAllPokemon(url);
        }
    }, [url]);

    const returnPage = async () => {
        while (pokemons.length) pokemons.pop();
        setUrl(previusPage);
    }

    const proxPage = async () => {
        while (pokemons.length) pokemons.pop();
        console.log(pokemons.length);
        setUrl(nextPage);
    }

    return (
        loading ? (<h1>Loading...</h1>) :
            (<div className="mainCards">
                <div>
                    <button className="previus"
                        onClick={e => returnPage()}
                        disabled={!previusPage}>
                    </button>
                </div>
                <div className="sixCards">
                    <div className="all-container">
                        {
                            pokemons.sort((idA, idB) =>
                                idA.id - idB.id
                            ).map((pokemon, index) =>
                                <Card
                                    id={pokemon.id}
                                    name={pokemon.name}
                                    image={pokemon.sprites.front_default}
                                    type={pokemon.types[0].type.name}
                                    key={index}
                                />
                            )

                        }
                    </div>
                </div>
                <div>
                    <button className="previus"
                        onClick={e => proxPage()}
                        disabled={!nextPage}>
                    </button>
                </div>
            </div>)

    );
}

export default AllCards;