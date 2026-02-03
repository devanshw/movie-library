// home page layout - list of movies, search bar, filters etc 

import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        {id:1, title: "The Matrix", releaseDate: "1999"},
        {id:2, title: "Inception", releaseDate: "2010"},
        {id:3, title: "Interstellar", releaseDate: "2014"}    
    ];

    const handleSearch = () => {
    }

    return <div className="home">
        <form onSubmit = {handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" />
            <button type="submit" className="search-button">Search</button>
        </form>

        
        <div className="movies-grid">
            {movies.map ((movie) => (
                <MovieCard movie = {movie} key={movie.id} />
            ))}
        </div>

    </div>
}

export default Home