import React, { useState } from 'react';
import { FiAlignJustify, FiX } from 'react-icons/fi';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { NavLink as RouterLink, useLocation, useNavigate } from 'react-router-dom';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = useLocation().pathname;
  const isHomePage = path === "/"; // Check if you're on the homepage
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -75,
      spy: true,
    });
  };

  return (
    <div className='bg-black/5 backdrop-blur-sm relative z-50 flex justify-center top'>
      {/* Desktop Navigation */}
      <div className='hidden lg:flex justify-center space-x-1 p-8 text-base relative top-2 text-gray-400'>
        {/* Home Link */}
        <ul>
          {isHomePage ? (
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6 cursor-pointer'>
              <span>HOME</span>
            </ScrollLink>
          ) : (
            <RouterLink
              to="/"
              className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6 cursor-pointer'>
              <span>HOME</span>
            </RouterLink>
          )}
        </ul>

        {/* About EBAJA Link */}
        <ul>
          {isHomePage ? (
            <ScrollLink
              to="baja"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6 cursor-pointer'>
              <span>ABOUT EBAJA</span>
            </ScrollLink>
          ) : (
            <RouterLink
              to="/#about"
              className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6 cursor-pointer'>
              <span>ABOUT EBAJA</span>
            </RouterLink>
          )}
        </ul>

        {/* Achievements Link */}
        <ul>
          {isHomePage ? (
            <ScrollLink
              to="winn"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6 cursor-pointer'>
              <span>ACHIEVEMENTS</span>
            </ScrollLink>
          ) : (
            <RouterLink
              to="/#achievements"
              className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6 cursor-pointer'>
              <span>ACHIEVEMENTS</span>
            </RouterLink>
          )}
        </ul>

        {/* Sponsors Link */}
        <ul>
          {isHomePage ? (
            <ScrollLink
              to="sponser"
              spy={true}
              smooth={true}
              offset={-5}
              duration={500}
              className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6 cursor-pointer'>
              <span>SPONSORS</span>
            </ScrollLink>
          ) : (
            <RouterLink
              to="/#sponsors"
              className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6 cursor-pointer'>
              <span>SPONSORS</span>
            </RouterLink>
          )}
        </ul>

        {/* Contact Us Link */}
        <ul>
          {isHomePage ? (
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6 cursor-pointer'>
              <span>CONTACT US</span>
            </ScrollLink>
          ) : (
            <RouterLink
              to="/#contact"
              className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6 cursor-pointer'>
              <span>CONTACT US</span>
            </RouterLink>
          )}
        </ul>

        {/* Gallery Link */}
        <ul>
          <RouterLink
            to="/gallery"
            className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6 cursor-pointer'>
            <span>GALLERY</span>
          </RouterLink>
        </ul>

        {/* Our Team Link */}
        <ul>
          <RouterLink
            to="/ourteam"
            className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6 cursor-pointer'>
            <span>OUR TEAM</span>
          </RouterLink>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className='p-4 flex absolute  z-50 lg:hidden'>
        <button onClick={toggleMenu}>
          {!isMenuOpen ? (
            <FiAlignJustify className='text-white p-3' size={70} />
          ) : (
            <FiX className='text-white p-3 z-50' size={70} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='flex flex-col justify-center items-center p-16 h-screen text-2xl space-y-10 text-gray-400 lg:hidden'>
          {/* Home Link */}
          <ul>
            {isHomePage ? (
              <ScrollLink
                to="hero"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
                className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6'
                onClick={toggleMenu}>
                HOME
              </ScrollLink>
            ) : (
              <RouterLink
                to="/"
                className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6'
                onClick={toggleMenu}>
                HOME
              </RouterLink>
            )}
          </ul>

          {/* About EBAJA Link */}
          <ul>
            {isHomePage ? (
              <ScrollLink
                to="baja"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
                className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6'
                onClick={toggleMenu}>
                ABOUT EBAJA
              </ScrollLink>
            ) : (
              <RouterLink
                to="/#about"
                className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6'
                onClick={toggleMenu}>
                ABOUT EBAJA
              </RouterLink>
            )}
          </ul>

          {/* Achievements Link */}
          <ul>
            {isHomePage ? (
              <ScrollLink
                to="winn"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
                className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6'
                onClick={toggleMenu}>
                ACHIEVEMENTS
              </ScrollLink>
            ) : (
              <RouterLink
                to="/#achievements"
                className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6'
                onClick={toggleMenu}>
                ACHIEVEMENTS
              </RouterLink>
            )}
          </ul>

          {/* Sponsors Link */}
          <ul>
            {isHomePage ? (
              <ScrollLink
                to="sponser"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
                className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6'
                onClick={toggleMenu}>
                SPONSORS
              </ScrollLink>
            ) : (
              <RouterLink
                to="/#sponsors"
                className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6'
                onClick={toggleMenu}>
                SPONSORS
              </RouterLink>
            )}
          </ul>

          {/* Contact Us Link */}
          <ul>
            {isHomePage ? (
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
                className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6'
                onClick={toggleMenu}>
                CONTACT US
              </ScrollLink>
            ) : (
              <RouterLink
                to="/#contact"
                className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6'
                onClick={toggleMenu}>
                CONTACT US
              </RouterLink>
            )}
          </ul>

          {/* Gallery Link */}
          <ul>
            <RouterLink
              to="/gallery"
              className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6'
              onClick={toggleMenu}>
              GALLERY
            </RouterLink>
          </ul>

          {/* Our Team Link */}
          <ul>
            <RouterLink
              to="/ourteam"
              className='border-b-2 hover:text-white hover:border-red-600 border-gray-400 p-6'
              onClick={toggleMenu}>
              OUR TEAM
            </RouterLink>
          </ul>
        </div>
      )}
    </div>
  );
}
