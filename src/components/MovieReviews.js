import React from 'react'

// Code MovieReviews Here
const MovieReviews = (props) => {

    function reviewBuilder(reviewObject) {
        return (
            <div className='review'>
                <h3>{reviewObject.headline}</h3>

            </div>
        )
    }

    return (
        <div className='latest-review-list'>
            {props.arrayState.map(resultObject => reviewBuilder(resultObject))}
        </div>
    )
}

export default MovieReviews