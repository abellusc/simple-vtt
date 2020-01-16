/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Input, Button, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { connect } from 'react-redux';
import { showModal } from '../../../redux/actions/modals';

class CreateSessionModal extends React.Component {
  componentWillReceiveProps() {
    console.log('Protected modal mounted, checking permissions...');

    if (!this.props.loggedIn) {
      this.props.dispatch(showModal('login'));
    }
  }

  render(){

    return (
      <div>
        <Modal isOpen={this.props.display} backdrop="static">
          <ModalHeader toggle={() => this.props.dispatch(showModal('invite'))}>create a session</ModalHeader>
          <ModalBody>
              <h1>create a session</h1>
              ready to play? fill out some basic information here...
              <hr />

              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Session Name</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="example: Tomb of Ul'goroth" />
              </InputGroup>
      <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Password</InputGroupText>
                </InputGroupAddon>
                <Input type="password" placeholder="12345678" />
              </InputGroup>
  

              <hr />

              once you create your session, you will be able to edit these settings and more!
              <br />
              <Button color="primary" block>create session</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  };
}

const mapStateToProps = state => {
    console.log('create session modal received props');
    console.log('state received', state);
    return {
        display: state.modals.createSession.display,
        options: state.modals.createSession.options,
        loggedIn: !!state.account.user,
    };
};

export default connect(mapStateToProps)(CreateSessionModal);