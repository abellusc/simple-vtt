import React from 'react';
import { connect } from 'react-redux';

import Brand from './brand/Brand';
import Board from './board/Board';
import ModalManager from './modals/ModalManager';
import Toolbar from './toolbar/Toolbar';
import { showModal } from '../redux/actions/modals';

import queryString from 'query-string';
import { setInviteCode } from '../redux/actions/sessions';

// entry point
class App extends React.Component {

    componentDidMount() {
        // check for invite code
        console.log('available props <root>', this.props);
        const query = queryString.parse(window.location.search);
        console.log('query', query);
        if (!query.invite) {
            console.log('Did not receive an invite code. Showing invite manager screen...');
            this.props.dispatch(showModal('invite', {}));
        } else {
            // invite code in url ?invite=12345
            console.log('Received an invite code in URL. Showing connection screen...');
            this.props.dispatch(setInviteCode(query.invite))
            this.props.dispatch(showModal('joinSession', {}));
        }
    }

    render(props) {
        // display the base whiteboard behind everything
        // float the invite code screen above
        return (
            <div className='App'>
                <Brand />
                <Board />
                <Toolbar />
                <ModalManager />
            </div>
        );
    }
}

// synchronizes redux state to local props
const mapStateToProps = (state) => {
    return {
        ...state,
    };
};

// connects redux
export default connect(mapStateToProps)(App);
