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

    constructor(props) {
        super(props);
        this.pacmanRef = React.createRef();
    }

    componentDidMount() {
        this.pacmanRef.current.focus();
    }

    handleKeyDown = (event) => {
        console.log(event.keyCode, event.key);
    }

    render () {
        return (
            <div
                ref={this.pacmanRef}
                className="pacman"
                tabIndex="0"
                style={this.state.position}
                onKeyDown={this.handleKeyDown}
                >
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