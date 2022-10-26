import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card.js';
import './AllCards.css';

function AllCards() {

    localStorage.setItem('pesquisou', 'false');
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState(null);
    const [previusPage, setPreviusPage] = useState(null);

    const getAllPokemon = async () => {
        localStorage.removeItem('pesquisou');
        localStorage.setItem('pesquisou', 'true');
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=15`);
        getPokemon(res.data.results);
        setNextPage(res.data.next);
        setPreviusPage(res.data.previous);
    }

    const getPokemon = async (res) => {
        await res.map(async (pokemon) => {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            setPokemons(state => {
                state = [...state, result.data];
                return state;
            });
        });
        setLoading(false);
    }

    useEffect(() => {
        if (localStorage.getItem('pesquisou') === 'false') {
            getAllPokemon();
        }
    }, [])

    const returnPage = async () => {
        const res = await axios.get(previusPage);
        while (pokemons.length) pokemons.pop();
        getPokemon(res.data.results);
        setNextPage(res.data.next);
        setPreviusPage(res.data.previous);
    }

    const proxPage = async () => {
        const res = await axios.get(nextPage);
        while (pokemons.length) pokemons.pop();
        getPokemon(res.data.results);
        setNextPage(res.data.next);
        setPreviusPage(res.data.previous);
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