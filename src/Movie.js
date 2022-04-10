import React, { Component } from 'react';
class Movie extends Component {
    render() {
        const { title, year } = this.props;
        return (
            <h3>Movie Title={title} Release Year = {yeear}</h3>
        );
    }
}
export default Movie;