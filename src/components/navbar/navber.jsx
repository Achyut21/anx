import Link from "next/link"
import React from 'react'

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className="relative h-32 w-32">
      <Link className="absolute inset-y-0 left-0 w-16" href={"/"}>ANX</Link>
        <div className="absolute inset-y-0 right-0 w-16">
          {links.map(link => (
            <Link  key={link.id} href={link.url}>
              {link.title}
            </Link>
          ))} 
       </div>
    </div>
  
  )
} 

export default Navbar
