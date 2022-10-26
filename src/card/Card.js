import { useEffect, useState } from 'react';
import './Card.css'

function Card(props) {

    localStorage.setItem('chegou', 'true');
    const [backgroundColor, setBackgroundColor] = useState('#eee');
    const [boxShadowFirst, setBoxShadowFirst] = useState('#bbb');
    const [boxShadowSecond, setBoxShadowSecond] = useState('#fff');
    const [content, setContent] = useState('#ddd');

    const styleCard = () => {
        localStorage.removeItem('chegou');
        localStorage.setItem('chegou', 'false');
        if (props.type === "grass") {
            setBackgroundColor('#68B34B');
            setBoxShadowFirst('#528C3B');
            setBoxShadowSecond('#7FD95B');
            setContent('#69C645');
        } else if (props.type === "fire") {
            setBackgroundColor('#E37120');
            setBoxShadowFirst('#BD5E1A');
            setBoxShadowSecond('#FF8E3D');
            setContent('#BD5E1A');
        } else if (props.type === "water") {
            setBackgroundColor('#2E6285');
            setBoxShadowFirst('#183345');
            setBoxShadowSecond('#3C7EAB');
            setContent('#183345');
        } else if (props.type === "bug") {
            setBackgroundColor('#3CAB4B');
            setBoxShadowFirst('#55B53F');
            setBoxShadowSecond('#A7B53F');
            setContent('#729F3F');
        } else if (props.type === "flying") {
            setBackgroundColor('#3DC7EF');
            setBoxShadowFirst('#2E87D9');
            setBoxShadowSecond('#34F8B7');
            setContent('#2E87D9');
        } else if (props.type === "normal") {
            setBackgroundColor('#B1C7C7');
            setBoxShadowFirst('#A8ACBD');
            setBoxShadowSecond('#B1BBC7');
            setContent('#A4ACAF');
        } else if (props.type === "poison") {
            setBackgroundColor('#E082D7');
            setBoxShadowFirst('#D67CA0');
            setBoxShadowSecond('#B282E0');
            setContent('#B97FC9');
        } else if (props.type === "electric") {
            setBackgroundColor('#D6AD24');
            setBoxShadowFirst('#C7F72A');
            setBoxShadowSecond('#F7B22A');
            setContent('#EED535');
        } else if (props.type === "ground") {
            setBackgroundColor('#F7DE3F');
            setBoxShadowFirst('#C29D42');
            setBoxShadowSecond('#B8893E');
            setContent('#AB9842');
        } else if (props.type === "fighting") {
            setBackgroundColor('#D56723');
            setBoxShadowFirst('#ED4C1A');
            setBoxShadowSecond('#E32B19');
            setContent('#ED8A1A');
        } else if (props.type === "psychic") {
            setBackgroundColor('#F366B9');
            setBoxShadowFirst('#D551DB');
            setBoxShadowSecond('#C75CF9');
            setContent('#DB515D');
        } else if (props.type === "rock") {
            setBackgroundColor('#A38C21');
            setBoxShadowFirst('#BA8D1C');
            setBoxShadowSecond('#B0761A');
            setContent('#BAAD1C');
        } else if (props.type === "ice") {
            setBackgroundColor('#51C4E7');
            setBoxShadowFirst('#4DFFF9');
            setBoxShadowSecond('#49F5BF');
            setContent('#4DA6FF');
        } else if (props.type === "ghost") {
            setBackgroundColor('#7B62A3');
            setBoxShadowFirst('#7066BA');
            setBoxShadowSecond('#616DB0');
            setContent('#9D66BA');
        } else if (props.type === "steel") {
            setBackgroundColor('#9EB7B8');
            setBoxShadowFirst('#A7CFC5');
            setBoxShadowSecond('#9FC4B1');
            setContent('#A7C3CF');
        } else if (props.type === "dragon") {
            setBackgroundColor('#53A4CF');
            setBoxShadowFirst('#50D9E6');
            setBoxShadowSecond('#4DDBC0');
            setContent('#F16E57');
        } else if (props.type === "fairy") {
            setBackgroundColor('#FDB9E9');
            setBoxShadowFirst('#DD9CE6');
            setBoxShadowSecond('#DFADFE');
            setContent('#E69CAB');
        }
    }

    useEffect(() => {
        if (localStorage.getItem('chegou') === 'true') {
            styleCard();
            localStorage.removeItem('chegou');
            localStorage.setItem('chegou', 'true');
        }
    }, [])

    return (
        <div className="totalCard">
            <div className="card"
                style={{
                    backgroundColor: backgroundColor,
                    border: '.5em solid ' + backgroundColor,
                    boxShadow: 'inset .5em .5em 1em ' + boxShadowFirst + ', inset -.5em -.5em 1em ' + boxShadowSecond,
                }}>
                <div className="icon"
                    style={{
                        backgroundColor: backgroundColor,
                        boxShadow: 'inset .5em .5em 1em ' + content + ', inset -.5em -.5em 1em ' + boxShadowSecond,
                    }}>
                    <img src={props.image} alt={props.name} />
                </div>

                <div className="content"
                    style={{
                        boxShadow: 'inset .5em .5em 1em ' + content + ', inset -.5em -.5em 1em ' + boxShadowSecond,
                    }}>
                    <h3>{props.name}</h3>
                    <p> Type: {props.type} </p>
                </div>
            </div>
        </div>
    );
}

export default Card;