import React from 'react'
const VideoTitle = ({title , overview}) => {
  return (
    <div className='w-screen aspect-video pt-[18%] px-16  absolute text-white bg-gradient-to-r from-black '>
        <h1 className='font-extrabold text-4xl '>{title}</h1>
        <h1 className='text-[15px]  my-2 w-[28%] text-justify '>{overview}</h1>
        <div className='flex gap-4 my-8'>
            <button className='px-6  py-2 bg-white hover:bg-opacity-80 rounded-md text-2xl text-black '><span className=' mr-2  text-black'><i className="fa-solid fa-play"></i></span>Play</button>
            <button className='px-5 py-1 hover:bg-gray-700 bg-gray-500 rounded-md text-2xl  bg-opacity-50'><span className='mr-2'><i className="fa-solid fa-circle-info"></i></span>More Info</button>
        </div>
        </div>
  )
}

export default VideoTitle

