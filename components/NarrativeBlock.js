import React from 'react';

const NarrativeBlock = ({
  children,
  alignment = 'center',
  isQuote = false
}) => {
  const alignClass = alignment === 'center' ? 'text-center mx-auto' : alignment === 'right' ? 'text-right ml-auto' : 'text-left mr-auto';
  const borderClass = isQuote ? 'border-none' : ''; // Removed side border for center quotes
  const quoteStyle = isQuote ? 'italic text-xl md:text-2xl text-offWhite' : 'text-base md:text-lg text-gray-400';

  return React.createElement(
    "div",
    {
      className: "max-w-3xl py-12 md:py-20 " + alignClass + " " + borderClass
    },
    React.createElement(
      "div",
      {
        className: "font-mono leading-relaxed " + quoteStyle
      },
      isQuote && React.createElement(
        "span",
        {
          className: "text-neonOrange text-glow block mb-4 text-3xl not-italic font-sans"
        },
        "“"
      ),
      children,
      isQuote && React.createElement(
        "span",
        {
          className: "text-neonOrange text-glow block mt-4 text-3xl not-italic font-sans"
        },
        "”"
      )
    )
  );
};

export default NarrativeBlock;