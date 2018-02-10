import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import { Home } from '../home';
import { About } from '../about';

import './heaer.css'

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div className="header">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>

                    <hr/>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                </div>
            </Router>
        )
    }
}
