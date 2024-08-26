import React from 'react'
import { useEffect } from 'react'
import { YOUTUBE_API } from '../utils/constants';
import VideoCard from '../components/VideoCard'
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/popularSlice';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const VideoContainer = () => {
  const data = useSelector((store) => store?.popularData?.popularData);
  const dispatch = useDispatch();
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    dispatch(addPopularMovies(json.items))
    //console.log(json.items);

  }
  return (
    <div className="flex flex-wrap">
      {data?.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id}>
             <VideoCard key={video.id} info={video} />
          </Link>
        )
      })}
    </div>
  )
}

export default VideoContainer
