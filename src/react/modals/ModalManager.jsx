import React from 'react';
import { connect } from 'react-redux';
import LoginModal from './login/LoginModal';
import InviteModal from './session/InviteModal';
import GamemasterModal from './gamemaster/GamemasterModal';
import JoinSessionModal from './session/JoinSessionModal';
import CreateSessionModal from './session/CreateSessionModal';
import ConnectingModal from './session/ConnectingModal';
import SignupModal from './login/SignupModal';

class ModalManager extends React.Component {
    render(props) {
        return (
            <>
                <LoginModal />
                <SignupModal />
                <InviteModal />
                <GamemasterModal />
                <JoinSessionModal />
                <CreateSessionModal />
                <ConnectingModal />
            </>
        );
    }
}
export default connect()(ModalManager);