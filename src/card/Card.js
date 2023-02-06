import { estiloCard } from '../const/estiloCard';
import './Card.css';
import React, { useState }  from 'react';
import ModalCard from './ModalCard.tsx';


function Card(props) {

    const [modalCard, setModalCard] = useState(false);

    const eventoAbrirModal = e => {
        console.log("true");
        setModalCard(true);
    };

    const eventoFecharModal = event => {
        event.preventDefault();
        setModalCard(false);
    };

    return (
        <div className="totalCard" onClick={eventoAbrirModal}>
            <div className="card"
                style={{
                    backgroundColor: estiloCard[props.type].backgroundColor,
                    border: '0.625rem solid ' + estiloCard[props.type].backgroundColor,
                    boxShadow: 'inset 0.3rem 0.3rem 0.625rem ' + estiloCard[props.type].boxShadowFirst + ', inset -0.3rem -0.3rem 0.625rem ' + estiloCard[props.type].boxShadowSecond,
                }}>
                <div className="icon"
                    style={{
                        backgroundColor: estiloCard[props.type].backgroundColor,
                        boxShadow: 'inset 0.3rem 0.3rem 0.625rem ' + estiloCard[props.type].content + ', inset -0.3rem -0.3rem 0.625rem ' + estiloCard[props.type].boxShadowSecond,
                    }}>
                    <img src={props.image} alt={props.name} />
                </div>

                <div className="content"
                    style={{
                        boxShadow: 'inset 0.3rem 0.3rem 0.625rem ' + estiloCard[props.type].content + ', inset -0.3rem -0.3rem 0.625rem ' + estiloCard[props.type].boxShadowSecond,
                    }}>
                    <h3>{props.name}</h3>
                    <p> Type: {props.type} </p>
                </div>
            </div>
            <ModalCard
                showModal={modalCard}
                eventoFecharModal={eventoFecharModal}
                titulo={props.name}
                informacao={props.type}
            />
        </div>
    );
}

export default Card;