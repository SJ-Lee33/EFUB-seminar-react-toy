import React, { Component } from 'react';
import PropTypes from "prop-types";

class Movie extends Component {
    render() {
        const { title, year } = this.props;
        return (
            <h3>Movie Title={title} Release Year = {yeear}</h3>
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