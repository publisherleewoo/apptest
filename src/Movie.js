import React from 'react';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'


var Movie = function ({ title, poster, genres, synopsis }) {

    return (
        <figure className="Movie">
            <div className="Movie_Columns">
                <MoviePoster alt={title} poster={poster} />
            </div>
            <figcaption>
                <h2>{title}</h2>
                {genres.map((genre, index) => {
                    return (<MovieGenre genre={genre} key={index}></MovieGenre>
                    )
                })}
                <MovieSynopsis synopsis={synopsis}></MovieSynopsis>
            </figcaption>
        </figure>
    )
}

function MoviePoster({ alt, poster }) {
    return (
        <img src={poster} alt={alt} title={alt} />
    )
}

function MovieGenre({ genre }) {
    return (
        <span className="Genre">{genre}, </span>
    )
}

function MovieSynopsis({ synopsis }) {
    var text = synopsis;
    return (
        <LinesEllipsis
            className="Synopsis"
            text={text}
            maxLine='5'
            ellipsis='...'
        />

    )
}

export default Movie
