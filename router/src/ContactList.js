import React, { Component } from 'react';
import Contact from './Contact';
import Img from './Img';


class ContactList extends Component {

    constructor() {
        super();

        this.state = {
            "contacts": [],
            "name": "",
            "surname": "",
            "number": "",
            "description": "",
            "cur_ind": 1,
            "search_text": "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSearchText = this.handleChangeSearchText.bind(this);
        this.insertToList = this.insertToList.bind(this);
        this.editItem = this.editItem.bind(this);
    }

    editItem(id, contact) {
        let contacts = this.state.contacts.slice();

        for(let i = 0; i < contacts.length; i++) {
            if(contacts[i].id === id) {
                contacts[i].name = contact.name;
                contacts[i].surname = contact.surname;
                contacts[i].number = contact.number;
                contacts[i].description = contact.description;
            }
        }

        this.setState({
            "contacts": contacts,
        });
    }

    handleChange(e) {
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
                "description": this.state.description,
            });

            this.setState({
                "items": contacts,
                "name": "",
                "number": "",
                "surname": "",
                "description": "",
                "cur_ind": this.state.cur_ind + 1,
            });
        }
    }

    render() {

        let list = this.state.contacts
        let contacts = null;

        if(this.state.search_text == "") {
            contacts = list.map((t) => (
                <Contact key = {t.id} contact = {t} picture = {<Img />}
                    editItem = {this.editItem}/>
            ));
        } else {
            list = list.filter(t => t.name.startsWith(this.state.search_text) 
                    || t.number.startsWith(this.state.search_text) 
                    || t.surname.startsWith(this.state.search_text))
            contacts = list.map((t) => (
                <Contact key = {t.id} contact = {t} picture = {<Img />}
                    editItem = {this.editItem}/>
            ));
        }

        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" 
                            data-toggle="collapse" data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" aria-expanded="false" 
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/home">Home</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/contacts">Contacts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/todo">Todo List</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"
                                onChange = {this.handleChangeSearchText}
                                value = {this.state.search_text}/>
                        </form>
                    </div>
                </nav>
                <div className = "contact-background">
                    <div className = "col-lg-8 center jumbotron contact-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Enter name"
                                value = {this.state.name} onChange = {this.handleChange} 
                                name = "name" />
                        </div>
                        <div className="form-group">
                            <label>Surname</label>
                            <input type="text" className="form-control" placeholder="Enter surname"
                                value = {this.state.surname} onChange = {this.handleChange} 
                                name = "surname" />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea className="form-control" rows="5" onChange = {this.handleChange}
                                value = {this.state.description} name = "description">
                           </textarea>
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text" className="form-control" placeholder="Phone number"
                                value = {this.state.number} onChange = {this.handleChange} 
                                name = "number" />
                        </div> 
                        <button type="submit" className="btn btn-primary" 
                            onClick = {this.insertToList}>Submit</button>
                    </div>
                </div>
                <div className = "contact-body">        
                    <div className = "col-lg-8 offset-2">
                        {contacts}
                    </div>
                </div>
                <div className = "footer"></div>
            </div>
        );
    }
}

export default ContactList;
