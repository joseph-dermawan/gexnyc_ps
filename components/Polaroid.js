import React from 'react';

const Polaroid = ({
  src,
  alt,
  caption,
  location,
  rotation = "rotate-0",
  className = "",
  aspectRatio = "square",
  filter = "none"
}) => {

  const heightClass = aspectRatio === 'square' ? 'aspect-square' : aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]';
  const filterClass = filter === 'grayscale' ? 'grayscale' : filter === 'sepia' ? 'sepia' : '';

  return React.createElement(
    "div",
    {
      className: "group relative bg-deepBlack p-3 sm:p-4 border border-gray-800 shadow-xl animate-glitch " + rotation + " " + className
    },
    /* Image Container */
    React.createElement(
      "div",
      {
        className: "w-full overflow-hidden bg-black " + heightClass + " mb-4 polaroid-img-wrapper"
      },
      React.createElement("img", {
        src: src,
        alt: alt,
        className: "w-full h-full object-cover " + filterClass,
        loading: "lazy"
      })
    ),
    /* Text Content */
    React.createElement(
      "div",
      {
        className: "flex flex-col justify-between min-h-[3rem]"
      },
      location && React.createElement(
        "p",
        {
          className: "font-mono text-[10px] uppercase tracking-[0.2em] text-neonOrange mb-1 border-b border-gray-800 pb-1 group-hover:border-neonOrange/50 transition-colors"
        },
        location
      ),
      caption && React.createElement(
        "p",
        {
          className: "font-mono text-xs md:text-sm text-gray-300 leading-tight"
        },
        caption
      )
    ),
    /* Decorative Overlay */
    React.createElement("div", {
      className: "absolute inset-0 pointer-events-none mix-blend-overlay opacity-10 bg-white/5"
    })
  );
};

export default Polaroid;