// home page layout - list of movies, search bar, filters etc 
import "../css/Home.css"
import MovieCard from "../components/MovieCard"
import { useState, useEffect} from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    // define state for search query, function to handle search
    const [searchQuery , setSearchQuery] = useState("")

    const [movies, setMovies] = useState([])
    const [error, setError] = useState (null)
    const [loading, setLoading] = useState (true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }
            catch(e){
                console.error("Error fetching popular movies:", e);
                setError("Failed to load popular movies.");
            }
            finally {
                setLoading(false);
            }
    }
    loadPopularMovies();
}
     , [] )

    const handleSearch = async (e) => {
        e.preventDefault(); // prevent page reload i.e default form submission behavior

        if (!searchQuery.trim()) return 
        if (loading) return
        setLoading(true);
        try {
            const searchedResults = await searchMovies(searchQuery);
            setMovies(searchedResults);
            setError (null);
        }
        catch (e) {
            console.error("Error searching movies:", e);
            setError("Failed to search movies.");
        }
        finally {
            setLoading (false);
        }
    }

    return <div className="home">
        <form onSubmit = {handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" 
            value = {searchQuery} 
            onChange = {(e) => setSearchQuery(e.target.value)}/>
            
            <button type="submit" className="search-button">Search</button>
            
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? (<div>Loading...</div>)  : (
        
        <div className="movies-grid">
            {movies.map ((movie) => (
                <MovieCard movie = {movie} key={movie.id} />
            ))}
        </div>
        )}

    </div>
}

export default Home