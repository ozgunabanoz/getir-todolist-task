import React, { Component } from 'react';
import M from 'materialize-css';

import AddModal from './../AddModal/AddModal';

class FOB extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {
            hoverEnabled: false
        });
    }

    render() {
        return (
            <div className="fixed-action-btn">
                <AddModal />
            </div>
        );
    }
}

export default FOB;
