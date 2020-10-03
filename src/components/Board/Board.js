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

    constructor(props) {
        super(props)

        this.foods = []
        for (let w = 0; w < this.state.width; w++) {
            for (let h = 0; h < this.state.height; h++) {
                this['food' + w + ',' + h] = React.createRef();
            }
        }
    }

    render () {
        const {width, height} = this.state;
        const {fieldSize} = this.props;

        let foods = []
        for (let w = 0; w < this.state.width; w++) {
            for (let h = 0; h < this.state.height; h++) {
                if (w !== 0 || h !== 0) {
                    const position = {
                        top: h,
                        left: w,
                    }
                    foods.push(
                        <Food
                            key={`food-elem-${w},${h}`}
                            position={position}
                            ref={this.foods['food' + w + ',' + h]}
                            fieldSize={fieldSize}
                        />
                    )
                }
            }
        }

        return (
            <div className="board">
                <Pacman width={width} height={height} fieldSize={fieldSize} />
                <Ghost color="red" width={width} height={height} fieldSize={fieldSize} />
                <Ghost color="blue" width={width} height={height} fieldSize={fieldSize} />
                <Ghost color="yellow" width={width} height={height} fieldSize={fieldSize} />
                <Ghost color="pink" width={width} height={height} fieldSize={fieldSize} />
                {foods}
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
