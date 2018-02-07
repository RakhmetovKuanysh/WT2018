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
            this.props.editItem(this.state.id, this.state.text, this.state.prior);
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
                <input type = "text" className="todo-input"
                    value = {this.state.text} disabled = {!this.state.editable}
                    onChange = {this.handleChange} />
                <div className = "divButtons">
                    <i className = {this.props.item.prior ? "fa fa-star fa-2x icon" : 
                        "fa fa-star-o fa-2x icon"} onClick = {this.props.checkItem} />
                    <i className = {this.state.editable ? "fa fa-check fa-2x icon" : 
                        "fa fa-pencil fa-2x icon"} onClick = {this.editItem} />
                    <i className = "fa fa-times fa-2x icon" onClick = {this.props.deleteItem} />
                    <i onClick = {this.props.doneItem} 
                        className = {this.props.item.done ? "red" : "green"}>done</i>
                </div>
            </div>
        );
    }
}

export default Item;
