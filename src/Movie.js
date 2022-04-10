import React, { Component } from 'react';
import PropTypes from "prop-types";

class Movie extends Component {
    render() {
        const { id, title, year, genres, summary, cover_img } = this.props;

        return (
            <div>
                <img src={cover_img} alt={title} title={title} />
                <div>
                    <h3>{title}</h3>
                    <h5>{year}</h5>
                    <ul>
                        {genres.map((genre, index) => (
                            <li key={index}>{genre}</li>
                        ))}
                    </ul>
                    <p>{summary.slice(0, 100)} ...</p>
                </div>
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