import { estiloCard } from '../const/estiloCard';
import './Card.css';
import React, { useState }  from 'react';
import ModalCard from './ModalCard.tsx';


function Card(props) {

    const [modalCard, setModalCard] = useState(false);

    const eventoAbrirModal = () => {
        setModalCard(true);
    };

    const eventoFecharModal = () => {
        setModalCard(false);
    };

    return (
        <div className="totalCard">
            <div className="card"
                onClick={eventoAbrirModal}
                style={{
                    backgroundColor: estiloCard[props.pokemon.types[0].type.name].backgroundColor,
                    border: '0.625rem solid ' + estiloCard[props.pokemon.types[0].type.name].backgroundColor,
                    boxShadow: 'inset 0.3rem 0.3rem 0.625rem ' + estiloCard[props.pokemon.types[0].type.name].boxShadowFirst + ', inset -0.3rem -0.3rem 0.625rem ' + estiloCard[props.pokemon.types[0].type.name].boxShadowSecond,
                }}>
                <div className="icon"
                    style={{
                        backgroundColor: estiloCard[props.pokemon.types[0].type.name].backgroundColor,
                        boxShadow: 'inset 0.3rem 0.3rem 0.625rem ' + estiloCard[props.pokemon.types[0].type.name].content + ', inset -0.3rem -0.3rem 0.625rem ' + estiloCard[props.pokemon.types[0].type.name].boxShadowSecond,
                    }}>
                    <img src={props.pokemon.sprites.front_default} alt={props.name} />
                </div>

                <div className="content"
                    style={{
                        boxShadow: 'inset 0.3rem 0.3rem 0.625rem ' + estiloCard[props.pokemon.types[0].type.name].content + ', inset -0.3rem -0.3rem 0.625rem ' + estiloCard[props.pokemon.types[0].type.name].boxShadowSecond,
                    }}>
                    <p>#{props.pokemon.id} {props.name}</p>
                    <p> Type: {props.pokemon.types[0].type.name} </p>
                </div>
            </div>
            <ModalCard
                showModal={modalCard}
                eventoFecharModal={eventoFecharModal}
                titulo={props.name}
                pokemon={props.pokemon}
            />
        </div>
    );
}

export default Card;