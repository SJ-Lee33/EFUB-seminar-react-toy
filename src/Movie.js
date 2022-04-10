import React, { Component } from 'react';
import PropTypes from "prop-types";

class Movie extends Component {
    render() {
        const { id, title, year, genres, summary, cover_img } = this.props;

        return (
            <div>
                <h3>{title}hi</h3>
            </div>
        );
    }
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    summary: PropTypes.string.isRequired,
    cover_img: PropTypes.string.isRequired
}

export default Movie;