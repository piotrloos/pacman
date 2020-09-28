import React, { Component } from 'react';
import {ReactComponent as GhostSvg} from './ghost.svg';

import './style.css';

class Ghost extends Component {
    render() {
        return (
            <div className="ghost">
                <GhostSvg />
            </div>
        )
    }
}

export default Ghost;
