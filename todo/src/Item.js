import React, { Component } from 'react';


class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            "id": this.props.item.id,
            "text": this.props.item.text,
            "editable": false,
        }

        this.editItem = this.editItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    editItem(e) {
        if(this.state.editable) {
            this.setState({
                "editable": false,
            })
            this.props.editItem(this.state.id, this.state.text);
        } else {
            this.setState({
                "editable": true,
            })
        }
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            "text": e.target.value,
        });
    }

    render() {
        return (
            <div className = "itemContainer">
                <input type = "text" value = {this.state.text} disabled = {!this.state.editable}
                    onChange = {this.handleChange} className = "inputItem" />
                <div className = "divButtons">
                    <input type = "button" value = {this.state.editable ? "SAVE" : "EDIT"} 
                        onClick = {this.editItem} />
                    <input type = "button" value = "DELETE" onClick = {this.props.deleteItem} />
                </div>
                <div className = "border"></div>
            </div>
        );
    }
}

export default Item;
