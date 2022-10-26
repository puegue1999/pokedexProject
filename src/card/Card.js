import { estiloCard } from '../const/estiloCard';
import './Card.css'

function Card(props) {

    return (
        <div className="totalCard">
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
        </div>
    );
}

export default Card;