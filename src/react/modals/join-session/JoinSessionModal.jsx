/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';

const JoinSessionModal = (props) => {
  const {
    className
  } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={props.display} toggle={toggle} className={className} backdrop="static">
        <ModalHeader toggle={toggle}>welcome to rfi</ModalHeader>
        <ModalBody>
            <h1>got an invite?</h1>
            enter the code here to accept an invitation
            <hr />
            <Input color="primary" placeholder="example: Yz92jklm"></Input>
            <Button color="primary">go to session!</Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
    console.log('join session modal received props');
    console.log('state received', state);
    return {
        display: state.modals.joinSession.display,
        options: state.modals.joinSession.options,
    };
};

export default connect(mapStateToProps)(JoinSessionModal);