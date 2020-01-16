/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { showModal } from '../../../redux/actions/modals';
import { validateInviteByCode, setInviteCode } from '../../../redux/actions/sessions';

const JoinSessionModal = (props) => {
  const {
    className
  } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  let code;

  return (
    <div>
      <Modal isOpen={props.display} toggle={toggle} className={className} backdrop="static">
        <ModalHeader toggle={() => props.dispatch(showModal('invite'))}>join a session</ModalHeader>
        <ModalBody>
            <h1>got an invite?</h1>
            enter the code here to accept an invitation. if you don't have an invite, ask your gamemaster to send one over!
            <hr />
            <Input color="primary" placeholder="example: Yz92jklm" value={props.code} onChange={(v) => props.dispatch(setInviteCode(v.target.value))} />
            <br />
            <Button color="primary" block onClick={() => props.dispatch(validateInviteByCode(props.code))}>join</Button>
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
        code: state.session.id,
    };
};

export default connect(mapStateToProps)(JoinSessionModal);