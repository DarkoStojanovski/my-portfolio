import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons"

export default function NavBar(){
  return(
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
          <nav className="flex">
          <NavLink to="/" 
          exact 
          activeClassName="text-white"
          className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
            Darko
          </NavLink>
          <NavLink to="/post" 
          className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          activeClassName="text-red-100 bg-red-700"
          >
            Blog Post
          </NavLink>
          <NavLink to="/project" 
          className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink to="/about" 
          className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          activeClassName="text-red-100 bg-red-700"
          >
            About Me!
          </NavLink>
          </nav>
          <div className="inline-flex py-3 px-3 my-6" >
            <SocialIcon 
            url="https://www.linkedin.com/in/darko-s/" 
            className="mr-4" 
            target="_blank" 
            fgColor="#fff" 
            style={{ height: 40, width: 40 }} />
            <SocialIcon 
            url="https://twitter.com/DarkoDarkoluis" 
            className="mr-4" 
            target="_blank" 
            fgColor="#fff" 
            style={{ height: 40, width: 40 }} />
            <SocialIcon 
            url="https://www.instagram.com/darkoluis/" 
            className="mr-4" 
            target="_blank" 
            fgColor="#fff" 
            style={{ height: 40, width: 40 }} />
          </div>
      </div>
    </header>
  )
}