
const omdbURL = "http://www.omdbapi.com/?";

export const getMovieByIDAPI = async (movieID) => {
  
  const fetchData = await fetch(
    `${omdbURL}apikey=${process.env.REACT_APP_OMDB_API}&i=${movieID}`
  );
    const jsonData = await fetchData.json();
  
  return jsonData;
};

// const getMoviesBySearchTerm=async()=> {
//     const res = await fetch(
//       `${omdbURL}apikey=${process.env.REACT_APP_OMDB_API}&s=${searchTerm}`
//     );
//     const movies = await res.json();
//     // const movies=await (data=>console.log(data))
//     console.log(res);
//     console.log(movies);
//     console.log(movies.Title);
//     return movies;
// }

// // getMoviesBySearchTerm();
// getMoviesBySearchTerm()// fetched movies
// // });