import React, { Component } from 'react';


class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            "id": this.props.contact.id,
            "name": this.props.contact.name,
            "surname": this.props.contact.surname,
            "number": this.props.contact.number,
            "description": this.props.contact.description,
            "editable": false,
            "show": false,
        }
        
        this.editItem = this.editItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showDesc = this.showDesc.bind(this);
    }

    editItem(e) {
        if(this.state.editable) {
            this.setState({
                "editable": false,
            });

            let contact = {
                "name": this.state.name,
                "surname": this.state.surname,
                "number": this.state.number
            }

            this.props.editItem(this.state.id, contact);
        } else {
            this.setState({
                "editable": true,
            });
        }
    }

    showDesc(e) {
        this.setState({
            "show": !this.state.show,
        });
    }

    handleChange(e) {
        console.log(e.target.name);
        if(e.target.name == "name") {
            this.setState({
                "name": e.target.value,
            });
        } else if(e.target.name == "surname") {
            this.setState({
                "surname": e.target.value,
            });
        } else if(e.target.name == "number") {
            this.setState({
                "number": e.target.value,
            });
        } else if(e.target.name == "description") {
            this.setState({
                "description": e.target.value,
            });
        }   
    }

    render() {
        let desc = null;
        if(this.state.show) {
            desc = <input type = "text" value = {this.state.description} rows="5"
                onChange = {this.handleChange} name = "description"
                disabled = {!this.state.editable} />;
        }

        return (
            <div className = "contact">
                {this.props.picture}
                <div className = "desc">
                    <div>
                        <input type = "text" className = "titleName" name = "name"
                            value = {this.state.name}
                            disabled = {!this.state.editable}
                            onChange = {this.handleChange} />
                        <input type = "text" className = "titleName" name = "surname"
                            value = {this.state.surname}
                            disabled = {!this.state.editable}
                            onChange = {this.handleChange} />
                    </div> 
                    <input type = "text" name = "number"
                        value = {this.state.number}
                        disabled = {!this.state.editable}
                        onChange = {this.handleChange} />
                    {desc}
                    <div className = "contact-buttons">
                        <button className = "btn btn-primary" onClick = {this.editItem}>
                            {this.state.editable ? "SAVE" : "EDIT"}</button>
                        <a onClick = {this.showDesc} className = "todo-show">
                            {this.state.show ? "hide" : "show"}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
