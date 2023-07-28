import React from 'react'
import './index.css';
import Tasks from './Components/Tasks';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div className=" mx-auto  h-screen bg-gradient-to-tr from-blue-600">



      <Nav />


      <div className='mt-10'>
        <form className='flex gap-4 p-5  justify-center '>
          <input type="text" className='rounded-lg outline-none px-3 w-80' placeholder='Enter your text' />
          <input type="submit" value="SUBMIT" className='cursor-pointer  px-4 py-2 rounded-md bg-gradient-to-r from-blue-400 bg-cyan-300 text-white ' />
        </form>
      </div>


      <h2 className='text-slate-600 font-semibold text-3xl text-center m-10'>
        All Your Tasks Are Here !!!
      </h2>

      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />





      {/* <Footer /> */}







    </div>
  )
}

export default App