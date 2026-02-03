/* 
display bunch of movies
image 
name of movie
release date
favourite or not (icon)

input prop - info about movie - object 
*/

function MovieCard({movie}) {

    return <div className="movie-card">
        <div className="movie-poster">
            <img src = {movie.url} alt= {movie.title} />
            <div className="movie-overlay">
                <button className="favourite-btn" onClick = {onFavouriteClick}>
                    ❤️
                </button>

            </div>
        </div>
        <div className="move-info">
            <h3>{movie.title}</h3>
            <p>{movie.releaseDate}</p>
        </div>
    </div>

}

function onFavouriteClick() {
    alert("favourite clicked")
}

export default MovieCard