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
        super(props);

        this.foodRefs = [];
        for (let x = 0; x < this.state.width; x++) {
            for (let y = 0; y < this.state.height; y++) {
                this.foodRefs[x + ',' + y] = React.createRef();
            }
        }

        this.pacmanRef = React.createRef();
    }

    componentDidMount() {
        this.foodInterval = setInterval(this.markFoodHidden, 25);
    }

    componentWillUnmount() {
        clearInterval(this.foodInterval);
    }

    markFoodHidden = () => {
        const pacmanX = this.pacmanRef.current.state.position.left;
        const pacmanY = this.pacmanRef.current.state.position.top;
        const {width, height} = this.state;

        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                let currentFood = this.foodRefs[x + ',' + y].current;
                if (x === pacmanX && y === pacmanY && !currentFood.state.hidden) {
                    currentFood.setHidden();
                    //increaseScore
                }
            }
        }
    }

    render () {
        const {width, height} = this.state;
        const {fieldSize} = this.props;
        let hidden = false;

        let foods = []
        for (let x = 0; x < this.state.width; x++) {
            for (let y = 0; y < this.state.height; y++) {
                const position = {
                    left: x,
                    top: y,
                }
                hidden = (x === 0 && y === 0);
                foods.push(
                    <Food
                        ref={this.foodRefs[x + ',' + y]}
                        key={`food-elem-${x},${y}`}
                        position={position}
                        fieldSize={fieldSize}
                        hidden={hidden}
                    />
                )
            }
        }

        return (
            <div className="board">
                <Pacman width={width} height={height} fieldSize={fieldSize} ref={this.pacmanRef} />
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
