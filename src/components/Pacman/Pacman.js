import React, { Component } from 'react';
import './style.css';
import {ReactComponent as PacmanSvg} from './pacman.svg';

class Pacman extends Component {

    state = {
        direction: 'right',
        position: {
            top: 0,
            left: 0,
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
        const {step, border, size, topScoreBoardHeight} = this.props;

        //37 ArrowLeft
        //38 ArrowUp
        //39 ArrowRight
        //40 ArrowDown

        if(event.key === "ArrowLeft") {
            this.setState({
                position: {
                    top: currentTop,
                    left: Math.max(currentLeft - step, 0),
                },
                direction: "left",
            })
        }
        else if(event.key === "ArrowUp") {
            this.setState({
                position: {
                    top: Math.max(currentTop - step, 0),
                    left: currentLeft,
                },
                direction: "up",
            })
        }
        else if(event.key === "ArrowRight") {
            this.setState({
                position: {
                    top: currentTop,
                    left: Math.min(currentLeft + step, window.innerWidth - border - size),
                },
                direction: "right",
            })
        }
        else if(event.key === "ArrowDown") {
            this.setState({
                position: {
                    top: Math.min(currentTop + step, window.innerHeight - border - size - topScoreBoardHeight),
                    left: currentLeft,
                },
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
    border: 10,
    topScoreBoardHeight: 50,
}

export default Pacman;
