import React, { Component } from 'react';
import Item from './Item';


class Sheet extends Component {

    constructor() {
        super();

        this.state = {
            "items": [],
            "text": "",
            "cur_ind": 1,
        }

        this.changeText = this.changeText.bind(this);
        this.insertToList = this.insertToList.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }

    changeText(e) {
        this.setState({
            "text": e.target.value,
        });
    }

    deleteItem(id) {
        this.setState({
            "items": this.state.items.filter((t) => t.id !==id),
        });
    }

    editItem(id, text) {
        let items = this.state.items.slice();

        for(let i = 0; i < items.length; i++) {
            if(items[i].id === id) {
                items[i].text = text;
            }
        }

        this.setState({
            "items": items,
        });
    }

    insertToList() {
        if(this.state.text === "") return;

        let toDoList = this.state.items;

        let ok = false;

        for(let i = 0;i< toDoList.length;i++) {
            if(toDoList[i].text == this.state.text) {
                ok = true;
            }
        }

        if(!ok) {
            toDoList.push(
                {
                    "id": this.state.cur_ind,
                    "text": this.state.text,
                }
            );

            this.setState({
                "items": toDoList,
                "text": "",
                "cur_ind": this.state.cur_ind + 1,
            })
        } else {
            this.setState({
                "text": "",
            })
        }
    }

    render() {

        let toDoList = this.state.items.map((t) => (
            <Item key = {t.id} item = {t} 
                deleteItem = {() => this.deleteItem(t.id)} 
                editItem = {this.editItem}/>
        ));

        return (
            <div className = "toDoContainer">
                <div className = "inputDiv">
                    <input type = "text" className = "inputText" 
                        value = {this.state.text} onChange = {this.changeText} />
                    <input type = "button" className = "btnAdd" value = "ADD" 
                        onClick = {this.insertToList} />
                </div>
                <div className = "greatBorder"></div>
                <ul>
                    {toDoList}
                </ul>
            </div>
        );
    }
}

export default Sheet;
