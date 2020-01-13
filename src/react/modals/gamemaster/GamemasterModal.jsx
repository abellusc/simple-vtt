/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';
import { connect } from 'react-redux';

const GamemasterModal = (props) => {
  const {
    className
  } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={props.display} toggle={toggle} className={className} backdrop="static">
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