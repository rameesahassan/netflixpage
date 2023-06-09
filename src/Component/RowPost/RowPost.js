import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { API_KEY ,imageUrl} from '../../constants/constants';
import './RowPost.css';
import YouTube from 'react-youtube';

function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlId,setUrlId] =useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Network Error')
    })
   
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie =(id)=>{
    console.log(id);
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])

      }else{
        console.log("Array Empty")
      }
    })
  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
          
            <img onClick={ ()=>handleMovie(obj.id)} className={props.isSmall? 'smallPoster' :'poster'} alt='poster'src={`${imageUrl+obj.backdrop_path}`}/>
            )}
        </div>

   { urlId &&    <YouTube videoId={urlId.key} opts={opts}  /> }
    </div>
  )
}

export default RowPost