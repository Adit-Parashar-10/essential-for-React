import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
    </nav>
  )
}

export default Nav