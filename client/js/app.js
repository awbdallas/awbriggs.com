import React, { Component } from 'react'

import { Header } from './components/header'

import { Home } from './components/home'
import { About } from './components/about'
import { Portfolio } from './components/portfolio'
import { Footer } from './components/footer'

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
                    <Redirect from="/" to={tabs[0].name} />
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

