
import React from 'react';
import { estiloCard } from '../const/estiloCard';
import './ModalCard.css';
import axios from 'axios';
import { Alert, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class ModalCard extends React.Component<any, any> {
  state = {
    abrirModal: false,
    entryPokemon: '',
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.showModal && this.state.abrirModal === false) {
      this.setState({ abrirModal: true });
    }

    if(this.state.abrirModal === true && this.state.entryPokemon === ''){
      const getPokemon = async (res) => {
          const result = await axios.get(res);
          const allEntry = result.data.flavor_text_entries.filter(results => results.language.name.includes('en'));
          this.setState({
            entryPokemon: allEntry[allEntry.length-1].flavor_text
          });
      }
      getPokemon(this.props.pokemon.species.url);
    }
  }

  eventoBotaoOk = event => {
    this.props.eventoFecharModal(event);
    this.setState({ abrirModal: false });
  };

  render() {
    return (
      <Modal isOpen={this.state.abrirModal} className='modal'>
        <div className='modalContainer'
          style={{
              backgroundColor: estiloCard[this.props.type].backgroundColor,
              border: '0.625rem solid ' + estiloCard[this.props.type].backgroundColor,
              boxShadow: 'inset 0.3rem 0.3rem 0.625rem ' + estiloCard[this.props.type].boxShadowFirst + ', inset -0.3rem -0.3rem 0.625rem ' + estiloCard[this.props.type].boxShadowSecond,
          }}>
          <div className="head">
            <div className="iconModal"
              style={{
                  backgroundColor: estiloCard[this.props.type].backgroundColor,
                  boxShadow: 'inset 0.3rem 0.3rem 0.625rem ' + estiloCard[this.props.type].content + ', inset -0.3rem -0.3rem 0.625rem ' + estiloCard[this.props.type].boxShadowSecond,
              }}>
              <img src={this.props.image} alt={this.props.titulo} />
            </div>
            {this.props.titulo}
          </div>
          <div className="head">
            <h1>{this.state.entryPokemon}</h1>
          </div>
          <ModalFooter>
            <Button color="danger" onClick={this.eventoBotaoOk} tabIndex={1}>
              Ok
            </Button>{' '}
          </ModalFooter>
        </div>
      </Modal>
    );
  }
}

export default ModalCard;