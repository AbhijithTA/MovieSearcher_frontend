import { useEffect, useState } from "react";
import API from "../api/axios";
import MovieCard from "../components/MovieCard";

export default function SavedMovies() {
  const [movies, setMovies] = useState([]);

  const fetchSaved = async () => {
    const res = await API.get("/movies/list");
    setMovies(res.data);
  };

  const deleteMovie = async (id) => {
    await API.delete(`/movies/${id}`);
    fetchSaved();
  };

  useEffect(() => {
    fetchSaved();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Saved Movies</h1>
        </div>

       
        {movies.length > 0 ? (
          <div>
            <div className="mb-6">
              <p className="text-lg text-gray-700">
                {movies.length} movie{movies.length !== 1 ? 's' : ''} saved
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {movies.map((m) => (
                <MovieCard key={m._id} movie={m} onDelete={deleteMovie} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-12 h-12 bg-gray-300 rounded-md flex items-center justify-center">
                <span className="text-gray-500 font-bold text-xl">M</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">No Movies Saved</h3>
           
          
          </div>
        )}
      </div>
    </div>
  );
}