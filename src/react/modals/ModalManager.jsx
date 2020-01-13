import React from 'react';
import { connect } from 'react-redux';
import LoginModal from './login/LoginModal';
import InviteModal from './invite/InviteModal';
import GamemasterModal from './gamemaster/GamemasterModal';

class ModalManager extends React.Component {
    render() {
        return (
            <>
                { this.props.modals.login.display ? <LoginModal /> : undefined };
                { this.props.modals.invite.display ? <InviteModal /> : undefined };
                { this.props.modals.gm.display ? <GamemasterModal /> : undefined };
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {};
};

const mapStateToProps = (state) => {
    return {
        modals: {
            login: { display: false },
            invite: { display: false },
            gm: { display: false },
            ...state.modals
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalManager);