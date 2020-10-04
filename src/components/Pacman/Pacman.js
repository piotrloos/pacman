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
        const {width, height} = this.props;

        //37 ArrowLeft
        //38 ArrowUp
        //39 ArrowRight
        //40 ArrowDown

        if(event.key === "ArrowLeft") {
            this.setState({
                position: {
                    top: currentTop,
                    left: Math.max(currentLeft - 1, 0),
                },
                direction: "left",
            })
        }
        else if(event.key === "ArrowUp") {
            this.setState({
                position: {
                    top: Math.max(currentTop - 1, 0),
                    left: currentLeft,
                },
                direction: "up",
            })
        }
        else if(event.key === "ArrowRight") {
            this.setState({
                position: {
                    top: currentTop,
                    left: Math.min(currentLeft + 1, width - 1),
                },
                direction: "right",
            })
        }
        else if(event.key === "ArrowDown") {
            this.setState({
                position: {
                    top: Math.min(currentTop + 1, height - 1),
                    left: currentLeft,
                },
                direction: "down",
            })
        }
    }

    render () {
        const {direction} = this.state;
        const {fieldSize} = this.props;
        const position = {
            top: this.state.position.top * fieldSize,
            left: this.state.position.left * fieldSize,
        }
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

export default Pacman;
