import React, { Component } from 'react';
import {ReactComponent as GhostSvg} from './ghost.svg';

import './style.css';

class Ghost extends Component {

    state = {
        direction: 'left',
        position: {
            top: 5 * 50,
            left: 5 * 50,
        }
    }

    render() {
        const {color} = this.props.color;
        return (
            <div
                className="ghost"
                style={this.state.position}
            >
                <GhostSvg className={`ghost-{color}`} />
            </div>
        )
    }
}

Ghost.defaultProps = {
    color: 'red',
    size: 50,
    step: 50,
    border: 10,
    topScoreBoardHeight: 50,
}

export default Ghost;
