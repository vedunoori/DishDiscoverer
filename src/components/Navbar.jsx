import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div id='logo'>
      <h2>Dish Discoverer App</h2>
      </div>
      <Link to={"/"}>

        Back</Link>
    </nav>
  )
}

export default Navbar