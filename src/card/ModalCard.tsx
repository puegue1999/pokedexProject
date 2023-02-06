
import React from 'react';
import { Alert, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class ModalCard extends React.Component<any, any> {
  state = {
    abrirModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.showModal && this.state.abrirModal === false) {
      this.setState({ abrirModal: true });
    }
  }

  eventoBotaoOk = event => {
    this.props.eventoFecharModal(event);
    this.setState({ abrirModal: false });
  };

  render() {
    return (
      <Modal isOpen={this.state.abrirModal} backdrop="static" id="login-page" autoFocus={false}>
        
          <ModalHeader id="login-title" data-cy="loginTitle">
              {this.props.titulo}
          </ModalHeader>
          <ModalBody>
            <Alert color="primary">
              {this.props.informacao}
            </Alert>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.eventoBotaoOk} tabIndex={1}>
              Ok
            </Button>{' '}
          </ModalFooter>
        
      </Modal>
    );
  }
}

export default ModalCard;