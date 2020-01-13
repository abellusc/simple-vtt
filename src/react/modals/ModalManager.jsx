import React from 'react';
import { connect } from 'react-redux';
import LoginModal from './login/LoginModal';
import InviteModal from './invite/InviteModal';
import GamemasterModal from './gamemaster/GamemasterModal';

class ModalManager extends React.Component {
    render() {
        return (
            <>
                <LoginModal />
                <InviteModal />
                <GamemasterModal />
            </>
        );
    }
}
export default connect()(ModalManager);