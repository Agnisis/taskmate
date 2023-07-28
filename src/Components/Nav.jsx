import React from 'react'

const Nav = () => {
  return (
    <div className=' bg-gradient-to-b from-bg-slate-500 flex items-center justify-between'>
    <h1 className=' p-6 font-bold text-4xl  text-center  text-slate-600'> TaskMate </h1>
    <div className='text-2xl p-5 text-white '>
    <a href='#' className='mx-5 border-b-4 border-cyan-500'>Home</a>
    <a href='#' className='mx-5 border-b-4 border-cyan-500' >Profile</a>
    <a href='#' className='mx-5 border-b-4 border-cyan-500' >About Us</a>
    <a href='#' className='mx-5 border-b-4 border-cyan-500' >Contact Us</a>
    </div>
  </div>
  )
}

export default Nav