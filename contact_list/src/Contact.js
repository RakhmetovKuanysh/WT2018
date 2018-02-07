import React, { Component } from 'react';
import avatar from './img/man.png';


class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            "id": this.props.contact.id,
            "name": this.props.contact.name,
            "surname": this.props.contact.surname,
            "number": this.props.contact.number,
            "editable": false,
        }
    }

    render() {
        return (
            <div className = "contact">
                <img src = {avatar} className = "avatar" />
                <div className = "desc">
                    <p className = "titleName">{this.props.contact.name} {this.props.contact.surname}</p>
                    <p className = "titleNumber">{this.props.contact.number}</p>
                </div>
            </div>
        );
    }
}

export default Contact;
