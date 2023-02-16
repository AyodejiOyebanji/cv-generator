import React from 'react'
import Link from "next/link"
import {AiFillHome} from "react-icons/ai"

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light py-lg-3 px-lg-4 bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" href="/"><AiFillHome/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link text-light mx-auto" href="/">Home</Link>
        </li>
      </ul>
      <form className="d-flex gap-2">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button className="btn btn-outline-success" type="submit"><Link href="Login" className="text-decoration-none text-light">
        Login
          </Link>
          </button>
        <button className="btn btn-outline-info" type="submit"><Link href="name" className="text-decoration-none text-light">
        get started
          </Link>
          </button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar