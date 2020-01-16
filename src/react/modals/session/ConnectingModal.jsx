/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Input, Button, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { connect } from 'react-redux';
import { showModal } from '../../../redux/actions/modals';

class ConnectingModal extends React.Component {
  componentDidMount() {
    console.log('Initializing connection...');
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.display} backdrop="static">
          <ModalHeader toggle={() => this.props.dispatch(showModal('invite'))}>connecting to session...</ModalHeader>
          <ModalBody>
              <h1>connecting...</h1>
              status: { this.props.status}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log('connecting to session modal received props');
    console.log('state received', state);
    return {
        display: state.modals.connecting.display,
        options: state.modals.connecting.options,
        status: state.session.status,
    };
};

export default connect(mapStateToProps)(ConnectingModal);