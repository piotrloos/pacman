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
                <Food position={{top: 100, left: 100}} />
                <Food position={{top: 200, left: 200}} />
            </div>
        )
    }
}

export default Board