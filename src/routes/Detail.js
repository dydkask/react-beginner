import { useEffect ,useState } from "react";
import { useParams } from "react-router-dom";
function Detail(){
    const {id } = useParams();
    const [detail,setDetail] = useState([]);
    const getDetail = async () => {
        const json = await( 
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();;
        setDetail(json.data.movie);
    }
    useEffect(() => {
        getDetail();
        
    },[id]);
    
    return <div > 
        <img src={detail.background_image} />
  </div> ;
}

export default Detail;