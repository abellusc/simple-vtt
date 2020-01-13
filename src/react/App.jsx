import React from 'react';
import { connect } from 'react-redux';

import Brand from './brand/Brand';
import Board from './board/Board';
import ModalManager from './modals/ModalManager';
import Toolbar from './toolbar/Toolbar';

// entry point
class App extends React.Component {
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

// adds dispatch helper functions to props
const mapDispatchToProps = (dispatch) => {
    return {
        doAThing: () => dispatch((() => {})()),
    }
};

// connects redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
