
import React from 'react';
import { estiloCard } from '../const/estiloCard';
import './ModalCard.css';
import axios from 'axios';
import Loader from './Loader.js';
import { Button } from 'reactstrap';

class ModalCard extends React.Component<any, any> {
  state = {
    abrirModal: 'modalNone',
    entryPokemon: '',
    loading: true,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.showModal !== prevProps.showModal) {      
      this.props.eventoFecharModal()
      this.setState({ abrirModal: 'modal' });
    }
    if(this.state.abrirModal === 'modal' && this.state.entryPokemon === ''){
      const getPokemon = async (res) => {
          const result = await axios.get(res);
          const allEntry = result.data.flavor_text_entries.filter(results => results.language.name.includes('en'));
          this.setState({
            entryPokemon: allEntry[allEntry.length-1].flavor_text
          });
          await this.sleep(500);
          this.setState({
            loading: false
          })
      }
      getPokemon(this.props.pokemon.species.url);
    }
  }

  pokemonType = () => {
    if(this.props.pokemon.types.length === 1){
      return <p>{this.props.pokemon.types[0].type.name}</p>
    }else{
      return <p>{this.props.pokemon.types[0].type.name}/{this.props.pokemon.types[1].type.name}</p>
    }
  }

  eventoBotaoOk = () => {
    this.setState({ abrirModal: 'modalNone' });
  };

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  render() {
    return (
      this.state.loading ? (
        <div className={this.state.abrirModal}>
          <Loader />
        </div>
      ) : (
        <div className={this.state.abrirModal}>
          <div className='modalContainer'>
            <div className="contentPokedex"
              style={{width:"11em"}}
            >
              <div className="iconModal"
                style={{
                  backgroundColor: estiloCard[this.props.pokemon.types[0].type.name].backgroundColor,
                  boxShadow: 'inset 0.3rem 0.3rem 0.625rem ' + estiloCard[this.props.pokemon.types[0].type.name].boxShadowSecond + ', inset -0.3rem -0.3rem 0.625rem ' + estiloCard[this.props.pokemon.types[0].type.name].boxShadowSecond,
                }}>
                <img src={this.props.pokemon.sprites.front_default} alt={this.props.titulo} />
                <img src={this.props.pokemon.sprites.front_shiny} alt={this.props.titulo} />
              </div>
              <div className="nome">
                <p style={{fontSize: '1.5em'}} >{this.props.titulo}</p>
                {this.pokemonType()}
              </div>
            </div>
            <div className="contentPokedex">
              <div className="nome entry">
                <p>{this.state.entryPokemon}</p>
              </div>
              <div className="nome stats">
                <div className="statBlock">
                  <div className="stat">
                    <h5>HP:</h5>
                    <progress className="hpBar" value={this.props.pokemon.stats[0].base_stat} max="255"/>
                  </div>
                  <div className="stat">
                    <h5>ATK:</h5>
                    <progress className="atkBar" value={this.props.pokemon.stats[1].base_stat} max="181"/>
                  </div>
                  <div className="stat">
                    <h5>DEF:</h5>
                    <progress className="defBar" value={this.props.pokemon.stats[2].base_stat} max="230"/>
                  </div>
                </div>
                <div className="statBlock">
                  <div className="stat">
                    <h5>S.ATK:</h5>
                    <progress className="spAtkBar" value={this.props.pokemon.stats[3].base_stat} max="180"/>
                  </div>
                  <div className="stat">
                    <h5>S.DEF:</h5>
                    <progress className="spDefBar" value={this.props.pokemon.stats[4].base_stat} max="230"/>
                  </div>
                  <div className="stat">
                    <h5>SPEED:</h5>
                    <progress className="speedBar" value={this.props.pokemon.stats[5].base_stat} max="200"/>
                  </div>
                </div>
              </div>
              <div className="exit">
                <Button className="botaoOk" color="danger" onClick={this.eventoBotaoOk} tabIndex={1}>
                  Ok
                </Button>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default ModalCard;