import React, { Component } from 'react'

import { Header } from './components/header'

import { Home } from './components/home'
import { About } from './components/about'
import { Portfolio } from './components/portfolio'
import { Footer } from './components/footer'
import { Example } from './components/Example'

import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom'


const tabs = [
    {
        name: 'Home',
        component: Home
    },
    {
        name: 'About',
        component: About
    },
    {
        name: 'Portfolio',
        component: Portfolio
    }
]

export default class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header tabs={tabs} />
                    <Route exact key={1} path="/" component={Home} />
                    <Route exact key={2} path="/home" component={Home} />
                    <Route exact key={3} path="/about" component={About} />
                    <Route exact key={4} path="/portfolio" component={Portfolio} />
                    <Route key={5} path="/portfolio/:id" component={Example} />
                    <Footer />
                    </React.Fragment>
            </Router>

        )
    }
}

