import React from 'react'
const MovieCards = ({posterPath}) => {  
  return (
    <div className='w-36 h-52'>
      <img className='w-full h-full object-cover   ' src={posterPath} alt="First Movie Card" />
    </div>
  )
}

export default MovieCards