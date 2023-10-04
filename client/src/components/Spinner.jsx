import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='animate-ping w-24 text-center m-8 rounded-full bg-sky-400'>
        Loading...
      </div>
    </div>
  )
}

export default Spinner
