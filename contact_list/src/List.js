import React, { Component } from 'react';
import Contact from './Contact';


class List extends Component {

    constructor() {
        super();

        this.state = {
            "contacts": [],
            "name": "",
            "surname": "",
            "number": "",
            "cur_ind": 1,
            "search_text": "",
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleChangeSurname = this.handleChangeSurname.bind(this);
        this.handleChangeSearchText = this.handleChangeSearchText.bind(this);
        this.insertToList = this.insertToList.bind(this);
    }

    handleChangeSurname(e) {
        this.setState({
            "surname": e.target.value,
        });
    }

    handleChangeName(e) {
        this.setState({
            "name": e.target.value,
        });
    }

    handleChangeNumber(e) {
        this.setState({
            "number": e.target.value,
        });
    }

    handleChangeSearchText(e) {
        this.setState({
            "search_text": e.target.value,
        })
    }

    insertToList() {
        if(this.state.name === "" || this.state.number === "" || this.state.surname == "")  return;
        let contacts = this.state.contacts;

        let ok = false;

        for(let i = 0;i < contacts.length; i++) {
            if(contacts[i].name == this.state.name && contacts[i].number == this.state.number &&
                contacts[i].surname == this.state.surname) {
                ok = true;
            }
        }

        if(!ok) {
            contacts.push({
                "id": this.state.cur_ind,
                "deleted": false,
                "name": this.state.name,
                "number": this.state.number,
                "surname": this.state.surname,
            });    
        }
        
        this.setState({
            "items": contacts,
            "name": "",
            "number": "",
            "surname": "",
            "cur_ind": this.state.cur_ind + 1,
        })
    }

    render() {

        let list = this.state.contacts
        let contacts = null;

        if(this.state.search_text == "") {
            contacts = list.map((t) => (
                <Contact key = {t.id} contact = {t} />
            ));
        } else {
            list = list.filter(t => t.name.startsWith(this.state.search_text) 
                    || t.number.startsWith(this.state.search_text) 
                    || t.surname.startsWith(this.state.search_text))
            contacts = list.map((t) => (
                <Contact key = {t.id} contact = {t} />
            ));
        }

        return (
            <div>
                <div>
                    <div className = "toDoContainer">
                        <div className = "headerDiv">
                            <i className="fa fa-search iconSearch"></i>
                            <input type = "text" name = "search" className = "inputText2"
                                placeholder = "Type name of contact" value = {this.state.search_text}
                                onChange = {this.handleChangeSearchText} />
                        </div>
                        <div>
                            <div className = "inputDiv">
                                <p>Name:</p>
                                <input type = "text" className = "inputText" 
                                    value = {this.state.name} onChange = {this.handleChangeName} />
                            </div>
                            <div className = "inputDiv">
                                <p>Surname:</p>
                                <input type = "text" className = "inputText" 
                                    value = {this.state.surname} onChange = {this.handleChangeSurname} />
                            </div>
                            <div className = "inputDiv">
                                <p>Phone Number:</p>
                                <input type = "text" className = "inputText" 
                                    value = {this.state.number} onChange = {this.handleChangeNumber} />
                            </div>
                            <input type = "button" className = "btnAdd" value = "ADD CONTACT" 
                                    onClick = {this.insertToList} />
                        </div>
                        <div className = "greatBorder"></div>
                    </div>
                </div>
                <div className = "bodyContainer">
                    <div className = "contactList">
                        <div className = "contactList">
                            {contacts}
                        </div>
                    </div>
                </div>
            </div>         
        );
    }
}

export default List;
