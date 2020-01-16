/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { hideModal, showModal } from '../../../redux/actions/modals';

const SignupModal = (props) => {
  const {
    className
  } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={props.display} toggle={toggle} className={className} backdrop="static">
        <ModalHeader toggle={toggle}>sign in or sign up</ModalHeader>
        <ModalBody>
          <Alert color="danger">You must sign up or sign in to access this content. Signing up is free and secure, so don't worry. We promise not to share your information with anyone.</Alert>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => showModal('login', true, {})}>Login</Button>{' '}
          <Button color="primary" onClick={() => showModal('signup', true, {})}>Signup</Button>
          <Button color="secondary" onClick={() => hideModal('login')}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
  console.log('signup modal received props');
  console.log('state received', state);
  return {
      display: state.modals.signup.display,
      options: state.modals.signup.options,
      loggedIn: !!state.account.user,
  };
};

export default connect(mapStateToProps)(SignupModal);