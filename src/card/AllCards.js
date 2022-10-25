import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card.js';
import './AllCards.css';

function AllCards() {

    localStorage.setItem('pesquisou', 'false');
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState(null);
    const [previustPage, setPreviusPage] = useState(null);

    const getAllPokemon = async () => {
        localStorage.removeItem('pesquisou');
        localStorage.setItem('pesquisou', 'true');
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=18`);
        getPokemon(res.data.results);
        setNextPage(res.data.next);
        setPreviusPage(res.data.previus);
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

    return (
        loading ? (<h1>Loading...</h1>) :
            (<div className="mainCards">
                <div>
                    <button class="previus">
                        <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                        </span>
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
                <div>alo</div>
            </div>)

    );
}

export default AllCards;