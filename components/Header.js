import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'History', href: '#section-1' },
    { name: 'Transition', href: '#section-2' },
    { name: 'New Life', href: '#section-3' },
    { name: 'Reflection', href: '#section-4' },
  ];

  return React.createElement(
    "header",
    {
      className: "fixed top-0 w-full z-50 transition-all duration-500 border-b " + (isScrolled ? 'bg-deepBlack/90 backdrop-blur-md border-gray-800 py-3' : 'bg-transparent border-transparent py-6')
    },
    React.createElement(
      "div",
      {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center"
      },
      React.createElement(
        "h1",
        {
          className: "text-lg text-neonOrange text-glow animate-flicker md:text-xl font-sans tracking-[0.15em] cursor-pointer hover:text-neonOrange transition-colors uppercase",
          onClick: () => window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        },
        "Memory, Space & The Global City"
      ),
      /* Desktop Nav */
      React.createElement(
        "nav",
        {
          className: "hidden md:flex space-x-8"
        },
        navLinks.map(link => React.createElement(
          "a",
          {
            key: link.name,
            href: link.href,
            className: "font-mono text-xs font-medium text-gray-400 hover:text-neonOrange hover:text-glow transition-all duration-300"
          },
          link.name
        ))
      ),
      /* Mobile Menu Button */
      React.createElement(
        "button",
        {
          className: "md:hidden text-gray-300 hover:text-neonOrange",
          onClick: () => setMobileMenuOpen(!mobileMenuOpen)
        },
        mobileMenuOpen ? React.createElement(X, {
          size: 24
        }) : React.createElement(Menu, {
          size: 24
        })
      )
    ),
    /* Mobile Nav Dropdown */
    mobileMenuOpen && React.createElement(
      "div",
      {
        className: "md:hidden bg-charcoal border-b border-gray-800 absolute w-full"
      },
      React.createElement(
        "nav",
        {
          className: "flex flex-col p-4 space-y-4"
        },
        navLinks.map(link => React.createElement(
          "a",
          {
            key: link.name,
            href: link.href,
            className: "font-mono text-sm uppercase tracking-widest text-gray-400 hover:text-neonOrange hover:text-glow",
            onClick: () => setMobileMenuOpen(false)
          },
          link.name
        ))
      )
    )
  );
};

export default Header;