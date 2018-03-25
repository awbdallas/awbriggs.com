import React, { Component } from 'react'

import './portfolio.scss'

export default class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio" >
                <div className="portfolio-title"> Portfolio </div>
                <div className="portfolio-section">
                    <div className="portfolio-section-header" > WordPress Sites </div>
                    <div className="examples-container">
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
                <div className="portfolio-section">
                    <div className="portfolio-section-header" > Custom Sites </div>
                    <div className="examples-container">
                        <div className="examples">
                            <img className="example-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=" />
                            <div className="example-content">
                                <h4 className="blog-header">Blog Header</h4>
                                <div className="blog-summary">Blog Summary</div>
                                <a href="#" className="blog-read-more">Read More</a>
                            </div>
                        </div>
                        <div className="examples">
                            <img className="example-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=" />
                            <div className="blog-content">
                                <h4 className="blog-header">Blog Header</h4>
                                <div className="blog-summary">Blog Summary</div>
                                <a href="#" className="blog-read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
