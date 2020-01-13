import React from 'react';
import { connect } from 'react-redux';
import './brand.css';

import Navigation from './navigation/Navigation';

class Brand extends React.Component {
    render() {
        return (
            <Navigation />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {};
};

const mapStateToProps = (state) => {
    console.log('Received mapped state', {
        ...state.brand,
    });
    return {
        ...state.brand,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Brand);