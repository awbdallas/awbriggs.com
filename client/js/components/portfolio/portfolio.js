import React, { Component } from 'react'

import axios from 'axios';

import './portfolio.scss'

const PORTFOLIO_API_ENDPOINT = '/api/portfolio'

export default class Portfolio extends Component {

    constructor(props) {
        super(props)

        this.state = {
            portfolio: []
        }

    }

    componentDidMount() {
        axios.get(PORTFOLIO_API_ENDPOINT).then((data)=> {
            this.setState({ portfolio: data.data.portfolio })
        })
    }

    render() {
        return (
            <div className="portfolio" >
                <div className="portfolio-title"> Portfolio </div>
                <div className="portfolio-section">
                    <div className="portfolio-section-header" > WordPress Sites </div>
                    <div className="examples-container">
                        { this.state.portfolio && this.state.portfolio.map((item, index) => {
                           return (
                               <div className="blog" key={index}>
                                   <img className="blog-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="/>
                                   <div className="blog-content">
                                       <h4 className="blog-header">{item.name}</h4>
                                       <div className="blog-summary">{item.snippet}</div>
                                       <a href={`/portfolio/${item.projectId}`} className="blog-read-more">Read More</a>
                                   </div>
                               </div>
                           )
                        })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
