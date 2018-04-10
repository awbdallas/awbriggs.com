import React, { Component } from 'react'

import axios from 'axios';

// import './about.scss'

const EXAMPLE_API_ENDPOINT = '/api/example'

export default class Example extends Component {
    constructor(props) {
        super(props)

        this.state = {
            exampleInfo: {},
            portfolioId: props.match.params.id
        }
    }

    componentDidMount() {
        axios.get(EXAMPLE_API_ENDPOINT + `?id=${this.props.match.params.id}`).then((data) => {
            this.setState({
                aboutInfo: data.data
            })
        }).catch((error) => {
            this.setState({
                exampleInfo: undefined
            })
        })
    }

    render() {
        return (
            <div>Hello World</div>
        )
    }
}
