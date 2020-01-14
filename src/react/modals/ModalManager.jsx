import React from 'react';
import { connect } from 'react-redux';
import LoginModal from './login/LoginModal';
import InviteModal from './invite/InviteModal';
import GamemasterModal from './gamemaster/GamemasterModal';
import JoinSessionModal from './join-session/JoinSessionModal';

class ModalManager extends React.Component {
    render(props) {
        return (
            <>
                <LoginModal />
                <InviteModal />
                <GamemasterModal />
                <JoinSessionModal />
            </>
        );
    }
}
export default connect()(ModalManager);