import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <button className='text-3xl border border-red-500 border-2xl'> <Link to={"/registration"}>Registration</Link>  </button>
    
    </>
  )
}

export default Home