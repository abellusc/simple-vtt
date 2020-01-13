import React from 'react';
import { connect } from 'react-redux';
import LoginModal from './login/LoginModal';
import InviteModal from './invite/InviteModal';
import GamemasterModal from './gamemaster/GamemasterModal';
import { showModal, hideModal } from '../../redux/actions/modals';

class ModalManager extends React.Component {
    render() {
        return (
            <>
                { this.props.modals.login.display ? <LoginModal options={this.props.modals.login} show={this.props.showModal} hide={this.props.hideModal} /> : undefined };
                { this.props.modals.invite.display ? <InviteModal options={this.props.modals.invite} show={this.props.showModal} hide={this.props.hideModal} /> : undefined };
                { this.props.modals.gm.display ? <GamemasterModal options={this.props.modals.gm} show={this.props.showModal} hide={this.props.hideModal} /> : undefined };
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showModal: (modalName, required, options) => dispatch(showModal(modalName, required, options)),
        hideModal: (modalName) => dispatch(hideModal(modalName)),
    };
};

const mapStateToProps = (state) => {
    console.log('Received modal state', state.modals);
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