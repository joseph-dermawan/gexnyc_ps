import React from 'react';

const Polaroid = ({
  src,
  alt,
  caption,
  location,
  // *** CHANGE 1: Accept the new filename prop ***
  filename, 
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
        // *** CHANGE 2: Modify class to use flex row for side-by-side layout ***
        // Changed from flex-col to flex-row justify-between items-end
        className: "flex flex-row justify-between items-end min-h-[3rem] border-t border-gray-800 pt-3 sm:pt-4 px-1"
      },
      // *** CHANGE 3A: Wrap Location/Caption into a new div (Left Side) ***
      React.createElement(
        "div",
        {
          className: "flex flex-col flex-grow pr-4" // flex-grow to take up space, pr-4 for spacing
        },
        location && React.createElement(
          "p",
          {
            // Removed border-b and its padding since the border is now on the parent container
            className: "font-mono text-[10px] uppercase tracking-[0.2em] text-neonOrange mb-1 transition-colors"
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
      
      // *** CHANGE 3B: Add Filename Text (Right Side) ***
      filename && React.createElement(
        "div",
        {
          className: "hidden md:block font-mono text-[10px] text-gray-600 tracking-widest whitespace-nowrap"
        },
        filename
      )
    ),
    /* Decorative Overlay */
    React.createElement("div", {
      className: "absolute inset-0 pointer-events-none mix-blend-overlay opacity-10 bg-white/5"
    })
  );
};

export default Polaroid;