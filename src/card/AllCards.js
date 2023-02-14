import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card.js';
import Loader from './Loader.js';
import './AllCards.css';
import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';

function AllCards() {

    localStorage.setItem('pesquisou', 'false');
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=18');
    const [page, setPage] = useState(1);


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
        await sleep(1000);
        setLoading(false);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    useEffect(() => {
        if (localStorage.getItem('pesquisou') === 'false') {
            getAllPokemon(url);
        }
    }, [url]);

    useEffect(() => {
        setLoading(true);
        while (pokemons.length) pokemons.pop();
        setUrl('https://pokeapi.co/api/v2/pokemon?offset=' + ((page-1)*18) + '&limit=18');
    }, [page]);

    return (
        loading ? (
                <Loader className="mainCards" />
            ) : (
                <div className="mainCards">
                    <div className="sixCards">
                        <div className="all-container">
                            {
                                pokemons.sort((idA, idB) =>
                                    idA.id - idB.id
                                ).map((pokemon, index) =>
                                    <Card
                                        pokemon={pokemon}
                                        name={capitalize(pokemon.name)}
                                        key={index}
                                    />
                                )
                            }
                        </div>
                    </div>
                    <div className='position'>
                        <PaginationControl
                            page={page}
                            between={2}
                            total={1279}
                            limit={18}
                            changePage={(page) => {
                                setPage(page);
                            }}
                            ellipsis={1}
                        />
                    </div>
                </div>
            )

    );
}

export default AllCards;