import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
const Watch = () => {
    const [params] = useSearchParams();
    const id = params.get("v");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu())
    },[])
  return (
    <div className='px-5'>
          <iframe width="1000" height="400"
              src={"https://www.youtube.com/embed/" + id}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
          </iframe>
    </div>
  )
}

export default Watch
