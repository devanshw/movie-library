// home page layout - list of movies, search bar, filters etc 
import "../css/Home.css"
import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {
    // define state for search query, function to handle search
    const [searchQuery , setSearchQuery] = useState("")

    const movies = [
        {id:1, title: "The Matrix", releaseDate: "1999"},
        {id:2, title: "Inception", releaseDate: "2010"},
        {id:3, title: "Interstellar", releaseDate: "2014"}    
    ];

    const handleSearch = (e) => {
        e.preventDefault(); // prevent page reload i.e default form submission behavior
        alert(`Searching for: ${searchQuery}`);
    }

    return <div className="home">
        <form onSubmit = {handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" 
            value = {searchQuery} 
            onChange = {(e) => setSearchQuery(e.target.value)}/>
            
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