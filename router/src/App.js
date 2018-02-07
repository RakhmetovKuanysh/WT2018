import React, { Component } from 'react';
import logo from './logo.svg';
import ContactList from './ContactList';
import TodoList from './TodoList';
import Home from './Home';
import 'font-awesome/css/font-awesome.min.css'
import About from './About';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path = "/contacts" component = {ContactList} /> 
                    <Route path = "/todo" component = {TodoList} />
                    <Route path = "/about" component = {About} />
                    <Route path = "/home" component = {Home} />
                </div>
            </Router>
        );
    }
}

export default App;
