/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Input, Button, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { connect } from 'react-redux';
import { showModal } from '../../../redux/actions/modals';

const JoinSessionModal = (props) => {
  const {
    className
  } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={props.display} toggle={toggle} className={className} backdrop="static">
        <ModalHeader toggle={() => props.dispatch(showModal('invite'))}>create a session</ModalHeader>
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

            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Password</InputGroupText>
              </InputGroupAddon>
              <Input type="password" placeholder="12345678" />
            </InputGroup>
 

            <hr />

            once you create your session, you will be able to edit these settings and more!

            <Button color="primary" block>create session</Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
    console.log('create session modal received props');
    console.log('state received', state);
    return {
        display: state.modals.createSession.display,
        options: state.modals.createSession.options,
    };
};

export default connect(mapStateToProps)(JoinSessionModal);