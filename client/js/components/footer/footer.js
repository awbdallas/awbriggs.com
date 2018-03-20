import React, { Component } from 'react'

import './footer.scss'

import axios from 'axios'

const FOOTER_API_ENDPOINT = '/api/footer-link'

export default class Footer extends Component {
    constructor(props){
        super(props)

        this.state = {
            footerLinks: []
        }
    }

    componentDidMount() {
        let response = this.getFooterLinks()
    }

    render() {
        return (
            <React.Fragment>
                { this.state.footerLinks && this.getFooter(this.state.footerLinks) }
            </React.Fragment>
        )
    }



    getFooter(footerLinks) {
        return (
            <ul>
                {footerLinks.map((data, index) => {
                    <li> </li>
                })}
            </ul>
        )
    }

    getFooterLinks() {
        axios.get(FOOTER_API_ENDPOINT).then((data) => {
        })
    }
}

