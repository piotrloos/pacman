import React, { Component } from 'react';

import './style.css';

class Food extends Component {
    state = {
        hidden: false,
    }
    render() {
        const {hidden} = this.state;
        const {fieldSize} = this.props;
        const position = {
            top: this.props.position.top * fieldSize,
            left: this.props.position.left * fieldSize,
        }
        return (
            <div style={position} className={hidden ? 'food hidden' : 'food'}>
                <div className="food-dot"></div>
            </div>
        )
    }
}

Food.defaultProps = {
    hidden: false,
}

export default Food;
