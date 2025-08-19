import { useState } from "react";
import API from "../api/axios";
import MovieCard from "../components/MovieCard";
import { Search, Film } from "lucide-react";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const res = await API.get(`/movies/search?title=${query}`);
    setMovies(res.data);
  };

  const saveMovie = async (movie) => {
    await API.post("/movies/save", movie);
    alert("Movie saved!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Movie Search</h1>
          <p className="text-gray-600">Discover and save your favorite movies</p>
        </div>

        
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex rounded-lg shadow-sm">
            <input
              type="text"
              placeholder="Search for movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            />
            <button
              onClick={searchMovies}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-r-lg transition-colors duration-200 flex items-center gap-2 min-w-[120px] justify-center"
            >
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>

       
        {movies.length > 0 ? (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Search Results ({movies.length} movie{movies.length !== 1 ? 's' : ''} found)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 auto-rows-fr">
              {movies.map((m) => (
                <MovieCard key={m.imdbID} movie={m} onSave={saveMovie} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Film className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No movies to show</h3>
            <p className="text-gray-600">Search for movies to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}