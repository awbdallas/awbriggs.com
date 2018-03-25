import React, { Component } from 'react'

import './footer.scss'

import axios from 'axios'

const FOOTER_API_ENDPOINT = '/api/footer-links'

export default class Footer extends Component {
    constructor(props){
        super(props)

        this.state = {
            footerLinks: []
        }
    }

    componentDidMount() {
        this.getFooterLinks()
    }

    reduceToState(type, response) {
        switch(type) {
            case 'FOOTER_LINKS':
                this.setState({ footerLinks : response })
                break
            default:
                break
        }
    }

    render() {
        return (
            <div className="footer" style={{ columnCount: this.state.footerLinks.length }}>
                { this.state.footerLinks &&
                <ul>
                    {this.state.footerLinks.map((data, index) => {
                        return <li key={index} className="footer-link">
                                    <a className={data.Image.split(':')[1]} />
                                </li>
                    })}
                </ul>}
            </div>
        )
    }

    getFooterLinks() {
        axios.get(FOOTER_API_ENDPOINT).then((data) => {
            this.reduceToState('FOOTER_LINKS', data.data)
        }).catch((error) => {
            this.reduceToState('FOOTER_LINKS', ['1', '2', '3'])
        })
    }
}

