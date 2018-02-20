import React, { Component } from 'react'

import { Header } from './components/header'

import { Home } from './components/home'
import { About } from './components/about'
import { Examples } from './components/examples'
import { Footer } from './components/footer'

import {
    BrowserRouter as Router,
    Route,
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
        name: 'Examples',
        component: Examples
    }
]

export default class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header tabs={tabs} />
                    { tabs.map((object, index) => {
                        return <Route exact key={index} path={`/${object.name}`} component={object.component} />
                    })}
                    <Footer />
                    </React.Fragment>
            </Router>

        )
    }
}

