import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'XYSIj7c9A4oUULw474DqVc2f3AChagC2';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
            .then(res => res.json())
            .then(result => this.setState({reviews: result.results}))
    }

    render() {
        return (
            <div className='latest-movie-reviews'>
                I am the latest container
                {<MovieReviews arrayState={this.state.reviews}/>}
            </div>
        )
    }
}
