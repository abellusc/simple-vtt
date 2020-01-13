import React from 'react';
import { connect } from 'react-redux';

import './toolbar.css';
import { Button } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarker, faMapMarker, faLayerGroup } from '@fortawesome/free-solid-svg-icons'

class Toolbar extends React.Component {
    render() {
        return (
            <div className="toolbar">
                <div className="tools">
                    <Button color="transparent">
                        <FontAwesomeIcon icon={faMarker} />
                    </Button>
                    <Button color="transparent">
                        <FontAwesomeIcon icon={faMapMarker} />
                    </Button>
                    <Button color="transparent">
                        <FontAwesomeIcon icon={faLayerGroup} />
                    </Button>
                </div>
                <hr />
                <div className="options">
                    aaa
                </div>
            </div>
        );
    }
}

export default connect()(Toolbar);