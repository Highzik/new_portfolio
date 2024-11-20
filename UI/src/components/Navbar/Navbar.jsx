import { NavbarMenu } from "../../mockData/data.js"
import { FaLaptopCode, FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react";
import ResponsiveMenu from "../Responsive_menu/ResponsiveMenu.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showBar, setShowBar] = useState(true);

  const handleChange = () => {
    setOpen(!open);
  }
  const handleBarChange = () => {
    setShowBar(!showBar)
  }
  return (
    <>
      <nav className="container font-poppins flex items-center justify-between py-8">
        {/**logo section */}
        <div className="flex items-center gap-2 uppercase font-semibold text-2xl">
          <FaLaptopCode />
          <p>coders</p>
          <p>gym</p>
        </div>

        {/**menu section */}
        <div className="hidden md:block">
          <ul className="flex gap-6 uppercase text-gray-600 font-bold">
            {NavbarMenu.map((items) => {
              return (
                <li key={items.id}>
                  <a href={items.link} className="inline-block py-1 px-3 hover:text">{items.title}</a>
                </li>
              )
            })}
          </ul>
        </div>

        {/**mobile responsive section */}
        {showBar ? <div className="md:hidden">
          <FaBars className="text-2xl cursor-pointer" onClick={handleChange} />

        </div> : <FaTimes onClick={handleBarChange} />}

        {/**Responsive Menu */}
        <ResponsiveMenu open={open} />

      </nav>
    </>
  )
}
