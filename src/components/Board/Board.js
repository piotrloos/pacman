import React, { Component } from 'react';
import Pacman from '../Pacman';
import Ghost from '../Ghost';
import Food from '../Food';
import './style.css';

class Board extends Component {
    state = {
        width: Math.floor((window.innerWidth - 2 * this.props.borderWidth) / this.props.fieldSize),
        height: Math.floor((window.innerHeight - 2 * this.props.borderWidth - this.props.scoreHeight) / this.props.fieldSize),
    }

    render () {
        const {width, height} = this.state;

        return (
            <div className="board">
                <Pacman width={width} height={height} />
                <Ghost color="red" width={width} height={height} />
                <Ghost color="blue" width={width} height={height} />
                <Ghost color="yellow" width={width} height={height} />
                <Ghost color="pink" width={width} height={height} />
                <Food position={{top: 100, left: 100}} />
                <Food position={{top: 200, left: 200}} />
            </div>
        )
    }
}

Board.defaultProps = {
    fieldSize: 50,
    borderWidth: 10,
    scoreHeight: 50,
}

export default Board
