/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { hideModal } from '../../../redux/actions/modals';

const GamemasterModal = (props) => {
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
            <Alert color="warning">
                Feature not yet implemented.
            </Alert>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => props.dispatch(hideModal('invite'))}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
    console.log('invite modal received props');
    console.log('state received', state);
    return {
        display: state.modals.invite.display,
        options: state.modals.invite.options,
    };
};

export default connect(mapStateToProps)(GamemasterModal);