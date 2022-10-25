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
                    border: '10px solid ' + backgroundColor,
                    boxShadow: 'inset 5px 5px 10px ' + boxShadowFirst + ', inset -5px -5px 10px ' + boxShadowSecond,
                }}>
                <div className="icon"
                    style={{
                        backgroundColor: backgroundColor,
                        boxShadow: 'inset 5px 5px 10px ' + content + ', inset -5px -5px 10px ' + boxShadowSecond,
                    }}>
                    <img src={props.image} alt={props.name} />
                </div>

                <div className="content"
                    style={{
                        boxShadow: 'inset 5px 5px 10px ' + content + ', inset -5px -5px 10px ' + boxShadowSecond,
                    }}>
                    <h3>{props.name}</h3>
                    <p> Type: {props.type} </p>
                </div>
            </div>
        </div>
    );
}

export default Card;