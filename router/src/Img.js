import React, { Component } from 'react';
import avatar from './img/man.png';


class Item extends Component {

    render() {
        return (
            <img src = {avatar} className = "avatar" />
        );
    }
}

export default Item;
