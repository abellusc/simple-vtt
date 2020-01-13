/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, Alert } from 'reactstrap';
import { connect } from 'react-redux';

const LoginModal = (props) => {
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
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <Label for="backdrop">Backdrop value</Label>{' '}
          <Input type="select" name="backdrop" id="backdrop" onChange={changeBackdrop}>
            <option value="true">true</option>
            <option value="false">false</option>
            <option value="static">"static"</option>
          </Input>
        </FormGroup>
        {' '}
        <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      </Form>
      <Modal isOpen={modal} toggle={toggle} className={className} backdrop="static">
        <ModalHeader toggle={toggle}>sign in or sign up</ModalHeader>
        <ModalBody>
          <Alert color="danger">to access this content, you must be a registered member. you don't have to sign up, but you also won't be able to access this without signing up... so there's that...</Alert>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Login</Button>{' '}
          <Button color="secondary" onClick={toggle}>Signup</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default connect()(LoginModal);