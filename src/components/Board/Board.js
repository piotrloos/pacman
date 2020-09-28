import React, { Component } from 'react';
import Pacman from '../Pacman';
import Ghost from '../Ghost';
import Food from '../Food';
import './style.css';

class Board extends Component {
    render () {
        return (
            <div className="board">
                <Pacman />
                {/* <Ghost color="red" />
                <Ghost color="blue" />
                <Ghost color="yellow" /> */}
                <Ghost color="pink" />
                <Food />
                <Food />
            </div>
        )
    }
}

export default Board