import PropType from "prop-types";
import { Link } from "react-router-dom";
function Movie({id,title,medium_cover_image,genres,summary}){
    return <div > 

        <Link to={`/moive/${id}`}><h2 >{title}</h2></Link>
        <img src={medium_cover_image} />
        <p>{summary}</p>
        {genres !== null ?

        <ul>
          {genres.map((g) => (

            <li key={g} > {g}</li>
          ))}
          
  
        </ul>
        : null }
      </div> ;
}
Movie.PropType = {
     id: PropType.string.isRequired,
    medium_cover_image: PropType.string.isRequired,
    title:PropType.string.isRequired,
    summary: PropType.string.isRequired,
    genres: PropType.arrayOf(PropType.string).isRequired

}

export default Movie;

