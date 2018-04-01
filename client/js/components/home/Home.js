import React, { Component } from 'react'

import './home.scss'

export default class Home extends Component {
    render() {
        return (
            <div className="home" >
                <h1 className="home-title">Home Page Example</h1>
                <h2 className="blog-section-header">Recent Blog Posts</h2>
                <div className="blog-container">
                    <div className="blog">
                        <img className="blog-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=" />
                        <div className="blog-content">
                            <h4 className="blog-header">Blog Header</h4>
                            <div className="blog-summary">Blog Summary</div>
                            <a href="#" className="blog-read-more">Read More</a>
                        </div>
                    </div>
                    <div className="blog">
                        <img className="blog-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=" />
                        <div className="blog-content">
                            <h4 className="blog-header">Blog Header</h4>
                            <div className="blog-summary">Blog Summary</div>
                            <a href="#" className="blog-read-more">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
