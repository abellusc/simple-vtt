/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { hideModal } from '../../../redux/actions/modals';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

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
            <>
            <Card>
                <CardBody>
                    <h1>
                        <FontAwesomeIcon icon={faUserPlus} />
                    </h1>
                <CardTitle>join a session</CardTitle>
                <CardSubtitle>for players</CardSubtitle>
                <CardText>provide an invite code to join a session directly. your gamemaster will give you a code to join</CardText>
                <Button onClick={this.joinSession}>join a session</Button>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <h1>
                        <FontAwesomeIcon icon={faPlusSquare} />
                    </h1>
                <CardTitle>create a session</CardTitle>
                <CardSubtitle>for gamemasters</CardSubtitle>
                <CardText>create a new session for others to play. you will need an account for this.</CardText>
                <Button onClick={this.createSession}>create a session</Button>
                </CardBody>
            </Card>
            </>
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