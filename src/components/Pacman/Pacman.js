import React, { Component } from 'react';
import './style.css';
import {ReactComponent as PacmanSvg} from './pacman.svg';

class Pacman extends Component {

    state = {
        direction: 'right',
        position: {
            left: 20,
            top: 20,
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

        const currentTop = this.state.position.top;
        const currentLeft = this.state.position.left;

        //37 ArrowLeft
        //38 ArrowUp
        //39 ArrowRight
        //40 ArrowDown

        if(event.key === "ArrowLeft") {
            this.setState({
                direction: "left",
            })
        }
        else if(event.key === "ArrowUp") {
            this.setState({
                direction: "up",
            })
        }
        else if(event.key === "ArrowRight") {
            this.setState({
                direction: "right",
            })
        }
        else if(event.key === "ArrowDown") {
            this.setState({
                direction: "down",
            })
        }
    }

    render () {
        const {direction, position} = this.state
        return (
            <div
                ref={this.pacmanRef}
                className={`pacman pacman-${direction}`}
                tabIndex="0"
                style={position}
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