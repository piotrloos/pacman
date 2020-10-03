import React, { Component } from 'react';
import {ReactComponent as GhostSvg} from './ghost.svg';

import './style.css';

class Ghost extends Component {

    state = {
        direction: 'left',
        position: {
            top: Math.floor(Math.random() * this.props.height),
            left: Math.floor(Math.random() * this.props.width),
        },
    }

    componentDidMount() {
        this.ghostMovementInterval = setInterval(this.changeDirection, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.ghostMovementInterval);
    }

    changeDirection = () => {
        const movementArray = ['right', 'down', 'left', 'up'];
        const movement = Math.floor(Math.random() * 4);
        this.setState({
            direction: movementArray[movement],
        })
        this.move();
    }

    move = () => {
        const currentTop = this.state.position.top;
        const currentLeft = this.state.position.left;
        const {width, height} = this.props;
        const {direction} = this.state;

        if(direction === "left") {
            this.setState({
                position: {
                    top: currentTop,
                    left: Math.max(currentLeft - 1, 0),
                },
            })
        }
        else if(direction === "up") {
            this.setState({
                position: {
                    top: Math.max(currentTop - 1, 0),
                    left: currentLeft,
                },
            })
        }
        else if(direction === "right") {
            this.setState({
                position: {
                    top: currentTop,
                    left: Math.min(currentLeft + 1, width - 1),
                },
            })
        }
        else if(direction === "down") {
            this.setState({
                position: {
                    top: Math.min(currentTop + 1, height - 1),
                    left: currentLeft,
                },
            })
        }
    }

    render() {
        const {color, fieldSize} = this.props;
        const position = {
            left: this.state.position.left * fieldSize,
            top: this.state.position.top * fieldSize,
        }
        return (
            <div
                className="ghost"
                style={position}
            >
                <GhostSvg className={`ghost-${color}`} />
            </div>
        )
    }
}

Ghost.defaultProps = {
    color: 'pink',
    fieldSize: 50,
}

export default Ghost;
