import React, { Component } from 'react';
import Item from './Item';


class TodoList extends Component {

    constructor() {
        super();

        this.state = {
            "items": [],
            "text": "",
            "cur_ind": 1,
            "viewAll": true,
        }

        this.changeText = this.changeText.bind(this);
        this.insertToList = this.insertToList.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.checkItem = this.checkItem.bind(this);
        this.doneItem = this.doneItem.bind(this);
        this.changeView = this.changeView.bind(this);
    }

    checkItem(id) {
        let items = this.state.items.slice();

        for(let i = 0; i < items.length; i++) {
            if(items[i].id === id) {
                items[i].prior = !items[i].prior;
            }
        }

        this.setState({
            "items": items,
        });
    }

    doneItem(id) {
        let items = this.state.items.slice();

        for(let i = 0; i < items.length; i++) {
            if(items[i].id === id) {
                items[i].done = !items[i].done;
            }
        }

        this.setState({
            "items": items,
        });
    }

    changeText(e) {
        this.setState({
            "text": e.target.value,
        });
    }

    changeView() {
        this.setState({
            "viewAll": !this.state.viewAll,
        })
    }

    deleteItem(id) {
        this.setState({
            "items": this.state.items.filter((t) => t.id !==id),
        });
    }

    editItem(id, text, prior) {
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
                    "prior": false,
                    "done": false,
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

    cmp(a, b) {
        if(a.prior == b.prior) return 0;
        if(a.prior && !b.prior) return -1;
        return 1;
    }

    render() {

        let arr = this.state.items;
        arr.sort(this.cmp);
        let toDoList = null;

        if(this.state.viewAll) {
            toDoList = arr.map((t) => (
                <Item key = {t.id} item = {t} 
                    deleteItem = {() => this.deleteItem(t.id)}
                    checkItem = {() => this.checkItem(t.id)}
                    editItem = {this.editItem}
                    doneItem = {() => this.doneItem(t.id)}/>
            ));    
        } else {
            toDoList = arr.filter(t => t.done).map((t) => (
                <Item key = {t.id} item = {t} 
                    deleteItem = {() => this.deleteItem(t.id)}
                    checkItem = {() => this.checkItem(t.id)}
                    editItem = {this.editItem}
                    doneItem = {() => this.doneItem(t.id)}/>
            ));
        }
        

        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button"
                        ata-toggle="collapse" data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/home">Home</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About <span 
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contacts">Contacts</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/todo">Todo List</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className = "insertForm">
                    <div className = "todo-form col-lg-8 offset-2">
                        <div className = "form-group">
                            <input type = "text" className = "form-control" 
                                placeholder="What do you have to do?" value = {this.state.text}
                                onChange = {this.changeText} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success col-lg-2 offset-5" 
                            onClick = {this.insertToList}>ADD</button>
                </div>
                <div className = "header-todo">
                    <div className = "marginAuto">
                        <p onClick = {this.changeView}>All</p>
                        <p onClick = {this.changeView}>Done</p>
                    </div>
                </div>
                <div className = "container">  
                    <div className = "col-lg-8 offset-2">
                        {toDoList}
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;
