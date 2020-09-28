import React, { Component } from 'react';
import './style.css';
import {ReactComponent as PacmanSvg} from './pacman.svg';

class Pacman extends Component {

    state = {
        direction: 'right',
        position: {
            left: 0,
            top: 0,
        }
    }
    render () {
        return (
            <div className="pacman" style={this.state.position}>
                <PacmanSvg />
            </div>
        )
    }
}

Pacman.defaultProps = {
    size: 50,
    step: 50,
    border: 2 * 10,
    topScoreBoardHeight: 50,
}

export default Pacman;