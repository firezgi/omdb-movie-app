import "./App.css";
import MovieCard from "./components/MovieCard";
import { getMovieByIDAPI } from "./utils/utils";

function App() {
  let movieData = {};
  let isMovieData = false;

  window.onload = async () => {
    const movieAPI = await getMovieByIDAPI("tt2975590");
    sessionStorage.setItem("movieData", JSON.stringify(movieAPI));
  };

  if (sessionStorage.getItem("movieData")) {
    movieData = JSON.parse(sessionStorage.getItem("movieData"));
    isMovieData = true;
  }

  // console.log(movieData);

  return (
    <div className="App">
      {isMovieData ? (
        <MovieCard
          title={movieData.Title}
          type={movieData.Type}
          posterUrl={movieData.Poster}
        />
      ) : (
        "Hello"
      )}
    </div>
  );
}

export default App;
