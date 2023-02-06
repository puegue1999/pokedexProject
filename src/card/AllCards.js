import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card.js';
import './AllCards.css';
import React  from 'react';

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

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        if (localStorage.getItem('pesquisou') === 'false') {
            getAllPokemon(url);
        }
    }, [url]);

    const returnPage = async () => {
        setLoading(true);
        while (pokemons.length) pokemons.pop();
        await sleep(1000);
        setUrl(previusPage);
    }

    const proxPage = async () => {
        setLoading(true);
        while (pokemons.length) pokemons.pop();
        await sleep(1000);
        setUrl(nextPage);
    }

    return (
        loading ? (
            <div className="mainCards">
                <div className="loader"/>
            </div>
            ) : (
                <div className="mainCards">
                    <div className="buttons">
                        <button
                            onClick={e => returnPage()}
                            disabled={!previusPage}>
                                <spam>&#9664; </spam>
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
                        <button
                            onClick={e => proxPage()}
                            disabled={!nextPage}>
                                <spam>&#9654; </spam>
                        </button>
                    </div>
                </div>
            )

    );
}

export default AllCards;