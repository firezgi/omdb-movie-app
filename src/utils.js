const apiEndpoint = `http://www.omdbapi.com/?apikey${process.env.REACT_APP_OMDB_KEY}`;

export const getMovieDetailsById = async (movieId = "tt3896198") =>
  await fetch(`${apiEndpoint}&i={movieId}`)
    .then((res) => res.json())
    .catch((err) => err);

    
    export const getMovieBySearchTerm = async (term) =>
      await fetch(`${apiEndpoint}&s={term}`)
        .then((res) => res.json())
        .catch((err) => err);

