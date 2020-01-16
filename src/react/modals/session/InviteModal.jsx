/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { hideModal, showModal } from '../../../redux/actions/modals';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPlusSquare } from '@fortawesome/free-solid-svg-icons';


const InviteModal = (props) => {
  const {
    className
  } = props;
//   const [modal, setModal] = useState(false);

  return (
    <div>
      <Modal isOpen={props.display} toggle={() => props.dispatch(hideModal('invite'))} className={className} backdrop="static">
        <ModalHeader>welcome to rfi</ModalHeader>
        <ModalBody>
            <>
            <Button className="cardButton" color="transparent" onClick={() => props.dispatch(showModal('joinSession'))}>
            <Card>
                <CardBody>
                    <h1>
                        <FontAwesomeIcon icon={faUserPlus} />
                    </h1>
                <CardTitle><h2>join</h2></CardTitle>
                <CardSubtitle>for players</CardSubtitle>
                <CardText>provide an invite code to join a session directly. your gamemaster will give you a code to join</CardText>
                {/* <Button onClick={() => props.dispatch(showModal('join-session'))}>join a session</Button> */}
                </CardBody>
            </Card>
            </Button>
            <Button className="cardButton" color="transparent" onClick={() => props.dispatch(showModal('createSession'))}>
            <Card>
                <CardBody>
                    <h1>
                        <FontAwesomeIcon icon={faPlusSquare} />
                    </h1>
                <CardTitle><h2>create</h2></CardTitle>
                <CardSubtitle>for gamemasters</CardSubtitle>
                <CardText>create a new session for others to play. you will need an account for this.</CardText>
                {/* <Button onClick={() => props.dispatch(showModal('create-session'))}>create a session</Button> */}
                </CardBody>
            </Card>
            </Button>
            </>
        </ModalBody>
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

export default connect(mapStateToProps)(InviteModal);