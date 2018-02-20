import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.scss'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <nav>
                        <ul>
                            { this.props.tabs.map((object, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/${object.name}`}>{object.name}</Link>
                                    </li>)
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}


Header.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        component: PropTypes.func
    })).isRequired
};