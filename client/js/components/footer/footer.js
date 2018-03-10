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

    render() {
        return (
            <div className="footer" >
                Hello Footer
            </div>
        )
    }


    compoentDidMount() {
        let response = getFooterLinks()
    }

    getFooterLinks() {
        axios.get(FOOTER_API_ENDPOINT).then(() => {
            console.log('hello')
        })
    }
}

