import React, { Component } from 'react'

import axios from 'axios';

import './about.scss'

const ABOUT_API_ENDPOINT = '/api/about'

export default class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            aboutInfo: []
        }
    }


    componentDidMount() {
        axios.get(ABOUT_API_ENDPOINT).then((data) => {
            this.setState({
                aboutInfo: data.data.about
            })
        })
    }

    render() {
        return <div className="about">
            <div className="about-title">About Me</div>
            {this.state.aboutInfo && this.state.aboutInfo.map((item, index) => {
                return (
                    <div className="about-section" key={index}>
                        <div className="about-section-header">{ item.section }</div>
                        <div className="about-section-content">{ item.content }</div>
                    </div>
                )
            })}
        </div>
    }
}
