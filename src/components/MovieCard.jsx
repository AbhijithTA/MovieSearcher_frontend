export default function MovieCard({ movie, onSave, onDelete, saved }) {
  return (
    <div className="bg-white rounded shadow p-3 flex flex-col h-full">
      <img src={movie.poster} alt={movie.title} className="w-full h-60 object-cover rounded" />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="mt-2 font-bold line-clamp-2">{movie.title}</h3>
          <p className="text-sm text-gray-600">{movie.year}</p>
        </div>
        <div className="mt-2">
          {onSave && !saved && (
            <button
              onClick={() => onSave(movie)}
              className="w-full bg-blue-500 text-white px-2 py-1 rounded"
            >
              Save
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(movie._id)}
              className="w-full bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}