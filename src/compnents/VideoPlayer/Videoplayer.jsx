import React from 'react'
import './Videoplayer.css'
import video from '../../assets/college-video.mp4'
const Videoplayer = () => {
  return (
    <div className='video-player'>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer
