import React from 'react'

const Tasks = () => {
  return (
    <div className=' mx-10 p-4 flex justify-center rounded-full my-3 items-center'>
        <p className=' mx-2 border-4 px-10 rounded-lg p-3 bg-white'>Your task is now up to date</p>
        <div>

          <button className='bg-gradient-to-r from-green-400 bg-cyan-300 text-white px-4 py-1 rounded-lg' >Edit</button>
          <button className='bg-gradient-to-r from-red-400 bg-yellow-300 text-white px-4 py-1 rounded-lg ml-5'>Delete</button>
        </div>
      </div>
  )
}

export default Tasks