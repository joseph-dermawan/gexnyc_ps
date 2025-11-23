import React from 'react';

const FilmStrip = () => {
  return React.createElement(
    "div",
    {
      className: "w-full py-12 md:py-24 overflow-hidden opacity-60"
    },
    React.createElement(
      "div",
      {
        className: "w-full h-3 md:h-4 bg-gradient-to-r from-charcoal via-darkGray to-charcoal relative"
      },
      /* Sprocket Holes Top */
      React.createElement("div", {
        className: "absolute -top-1 md:-top-2 left-0 w-full h-full flex justify-between px-1"
      }),
      React.createElement("div", {
        className: "w-full h-full",
        style: {
          backgroundImage: 'repeating-linear-gradient(90deg, transparent 0, transparent 10px, #0E0E0E 10px, #0E0E0E 14px)'
        }
      })
    )
  );
};

export default FilmStrip;