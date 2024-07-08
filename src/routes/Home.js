import { useState , useEffect } from "react";
import Movie from "../components/Movie";

function Home(){

    const [loadoing,setLoading] =useState(true);
  const [movies,setMovies] = useState([]);
  
  const getMovies = async() => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
   useEffect(() => {
    getMovies();
  },[]);

  return ( 
    <div >
      {loadoing ? <h1>loading</h1> : <div> {movies.map(movie => 
      //id,title,medium_cover_image,genres,summary
      <Movie key={movie.id} id={movie.id} title ={movie.title} medium_cover_image={movie.medium_cover_image} summary ={movie.summary} genres ={movie.genres}  />
       )}
      </div>
      }
    </div>
  );

}

export default Home;