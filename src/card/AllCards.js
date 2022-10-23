import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card.js';
import './AllCards.css';

function AllCards() {

    const [allPokemons, setAllPokemons] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true)

    const getAllPokemon = async () => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=18`);
        setAllPokemons(res.data.results);
    }

    const getPokemon = async(res) => {
        await res.map( async(pokemon) => {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            setPokemons(state => {
                state=[...state, result.data]
                return state;
            });
        })
        setLoading(false);
        await console.log(pokemons);
    }

    const stylePokemon = () => {

    }

    useEffect(() => {
        getAllPokemon();
    }, [])

    useEffect(() => {
        console.log(allPokemons);
        getPokemon(allPokemons);
    }, [allPokemons])

    return (
        loading ? (<h1>Loading...</h1>) :
            (<div className="sixCards">
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
            </div>)
        
    );
}

export default AllCards;