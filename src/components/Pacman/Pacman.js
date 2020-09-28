import React, { Component } from 'react';
import './style.css';

class Pacman extends Component {
    render () {
        return (
            <div className="pacman">Pacman</div>
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