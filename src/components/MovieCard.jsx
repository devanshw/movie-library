/* 
display bunch of movies
image 
name of movie
release date
favourite or not (icon)

input prop - info about movie - object 
*/

import { useMovieContext } from "../contexts/MovieContext"


import "../css/MovieCard.css"
function MovieCard({movie}) {

    const { isFavorite, addFavorite, removeFavorite } = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavouriteClick(e) {
        e.preventDefault();
        if (favorite) {
            removeFavorite (movie.id);
        } else {
            addFavorite (movie);
        }   
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt= {movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick = {onFavouriteClick}>
                    ❤️
                </button>

            </div>
        </div>
        <div className="move-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>

}

function onFavouriteClick() {
    alert("favourite clicked")
}

export default MovieCard