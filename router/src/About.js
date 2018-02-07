import React, { Component } from 'react';


class About extends Component {

    constructor() {
        super();
    }

    render() {
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
                            <li className="nav-item active">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contacts">Contacts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/todo">Todo List</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <header class="bg-primary text-white">
                    <div class="container text-center">
                        <h1>About Application</h1>
                        <p class="lead">Hello World!!</p>
                    </div>
                </header>

                <section id="about">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <h2>About this page</h2>
                                <p class="lead">This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>
                                <ul>
                                    <li>Clickable nav links that smooth scroll to page sections</li>
                                    <li>Responsive behavior when clicking nav links perfect for a one page website</li>
                                    <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>
                                    <li>Minimal custom CSS so you are free to explore your own unique design options</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;