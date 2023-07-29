import React from 'react'
import { useState } from 'react';
const Tasks = () => {
  const [tasks, setTask] = useState([
    { id: 1001, name: "Revise React hooks", completed: true },
    { id: 1002, name: "Learn Node js with Express js", completed: true },
    { id: 1003, name: "Learn Mongodb by weekend", completed: true },
    { id: 1004, name: "Revise java by saturday", completed: true }
  ]);

  function handleDelete(id){
    setTask(tasks.filter(task=>task.id!=id))
  }
  return (


    <div className=' mx-10 p-4 flex justify-center rounded-full my-3 items-center'>
      <ul>
        {
          tasks.map((task) => (
            <li key={task.id} className='flex items-center justify-between m-4'>
              <span className='mx-2 border-4 px-10 rounded-lg p-3 bg-white w-full'>{task.id} - {task.name}</span>
              <div className='flex'>
                <button className='bg-gradient-to-r from-green-400 bg-cyan-300 text-white px-4 py-1 rounded-lg' >Edit</button>
                <button onClick={()=>handleDelete(task.id)} className='bg-gradient-to-r from-red-400 bg-yellow-300 text-white px-4 py-1 rounded-lg ml-5'>Delete</button>
              </div>
            </li>

          ))
        }
      </ul>













      {/* <p className=' mx-2 border-4 px-10 rounded-lg p-3 bg-white'>Your task is now up to date</p> */}

    </div>
  )
}

export default Tasks