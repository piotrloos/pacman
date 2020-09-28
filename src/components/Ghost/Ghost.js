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
        const {step, border, size, topScoreBoardHeight} = this.props;
        const {direction} = this.state;

        if(direction === "left") {
            this.setState({
                position: {
                    top: currentTop,
                    left: Math.max(currentLeft - step, 0),
                },
            })
        }
        else if(direction === "up") {
            this.setState({
                position: {
                    top: Math.max(currentTop - step, 0),
                    left: currentLeft,
                },
            })
        }
        else if(direction === "right") {
            this.setState({
                position: {
                    top: currentTop,
                    left: Math.min(currentLeft + step, window.innerWidth - border - size),
                },
            })
        }
        else if(direction === "down") {
            this.setState({
                position: {
                    top: Math.min(currentTop + step, window.innerHeight - border - size - topScoreBoardHeight),
                    left: currentLeft,
                },
            })
        }
    }

    render() {
        const {color} = this.props;
        return (
            <div
                className="ghost"
                style={this.state.position}
            >
                <GhostSvg className={`ghost-${color}`} />
            </div>
        )
    }
}

Ghost.defaultProps = {
    color: 'pink',
    size: 50,
    step: 50,
    border: 10,
    topScoreBoardHeight: 50,
}

export default Ghost;
