import React from "react"
import PropTypes from "prop-types"
import "./Movie.css"

// components
function Movie({id, year, title, summary, poster, genres}){
  return (
    <div className="movie">
       <img src={poster} alt={title} title={title}></img>
      <div className="movie__meta">
        <h4 className="movie__title">{title}</h4>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres.map((geners, index) => (
            <li key={index} className="genres__genre">
              {geners}
            </li>))}
        </ul>
        <p className="movie__summary">{summary}</p>
     </div>
    </div>
    )
}


Movie.propTpyes = {
  id : PropTypes.number.isRequired,
  year : PropTypes.number.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;