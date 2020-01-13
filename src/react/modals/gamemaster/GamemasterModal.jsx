/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, Alert } from 'reactstrap';
import { connect } from 'react-redux';

const GamemasterModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);

  const toggle = () => setModal(!modal);

  const changeBackdrop = e => {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    setBackdrop(value);
  }

  return (
    <div>
      <Modal isOpen={props.options.display} toggle={toggle} className={className} backdrop="static">
        <ModalHeader toggle={toggle}>gamemaster tools</ModalHeader>
        <ModalBody>
            <Alert color="warning">
                You do not have permission to access to this feature.
            </Alert>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => props.hideModal('gm')}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default connect()(GamemasterModal);