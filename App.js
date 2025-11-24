import React from 'react';
import Header from './components/Header.js';
import Polaroid from './components/Polaroid.js';
import FilmStrip from './components/FilmStrip.js';
import NarrativeBlock from './components/NarrativeBlock.js';
import { ArrowDown, Mail, Zap } from 'lucide-react';

const App = () => {
  return React.createElement(
    "div",
    {
      className: "min-h-screen bg-deepBlack text-gray-200 selection:bg-neonOrange selection:text-black overflow-x-hidden font-mono"
    },
    React.createElement(Header, null),
    /* HERO SECTION - WITH GLITCH */
    React.createElement(
      "section",
      {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden"
      },
      React.createElement(
        "div",
        {
          className: "absolute inset-0 z-0 glitch-wrapper"
        },
        React.createElement("div", {
          className: "glitch-layer"
        }),
        React.createElement("img", {
          src: "/asset/hero-bg.jpg",
          alt: "Industrial Texture",
          className: "w-full h-full object-cover opacity-30"
        }),
        React.createElement("div", {
          className: "absolute inset-0 bg-gradient-to-b from-deepBlack/30 via-transparent to-deepBlack"
        })
      ),
      React.createElement(
        "div",
        {
          className: "relative z-10 text-center px-4 max-w-5xl mx-auto mt-16"
        },
        React.createElement(
          "p",
          {
            className: "font-mono text-neonOrange text-glow text-xs md:text-sm uppercase tracking-[0.4em] mb-6 animate-pulse"
          },
          "GEX - NYC PHOTO ESSAY"
        ),
        React.createElement(
          "h1",
          {
            className: "font-sans text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8 text-offWhite glitch-text"
          },
          "MEMORY",
          React.createElement("br", null),
          " SPACE & THE",
          React.createElement("br", null),
          " GLOBAL CITY"
        ),
        React.createElement(
          "p",
          {
            className: "font-mono text-gray-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed border-t border-deepOrange/50 pt-6 mt-8"
          },
          "Preservation vs. Progress: Adaptive Repurposing in New York City's Industrial Landscape"
        )
      ),
      React.createElement(
        "div",
        {
          className: "absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600"
        },
        React.createElement(ArrowDown, {
          size: 24
        })
      )
    ),
    /* INTRO TEXT - Centered container */
    React.createElement(
      "div",
      {
        className: "max-w-7xl mx-auto px-4"
      },
      React.createElement(
        "section",
        {
          className: "py-24"
        },
        React.createElement(
          NarrativeBlock,
          {
            alignment: "center"
          },
          "As New York City ascended into a global metropolis, its core industrial infrastructure\u2014the factories, the warehouses, the docks\u2014began to fade. This photo-essay explores the remaining physical shells of that era."
        )
      ),
      React.createElement(FilmStrip, null)
    ),
    /* SECTION 1: SETTING THE STAGE */
    React.createElement(
      "section",
      {
        id: "section-1",
        className: "py-20"
      },
      React.createElement(
        "div",
        {
          className: "max-w-7xl mx-auto px-4 text-center mb-12"
        },
        React.createElement(
          "p",
          {
            className: "font-mono text-neonOrange text-glow text-xs md:text-sm uppercase tracking-[0.4em] mb-6 animate-flicker"
          },
          "Section 01"
        ),
        React.createElement(
          "h2",
          {
            className: "font-sans font-bold text-4xl md:text-5xl mt-6 text-offWhite"
          },
          "Setting the Stage"
        ),
        React.createElement(
          "p",
          {
            className: "font-mono text-gray-500 text-sm mt-4 uppercase"
          },
          "History, Past Utility & The City of Industry"
        )
      ),
      /* Panel 1.1: Film Strip Gallery - With CSS Glitch on Div Backgrounds */
      React.createElement(
        "div",
        {
          className: "w-full bg-deepBlack border-y-4 border-charcoal py-4 my-16 relative overflow-hidden"
        },
        /* Sprocket Holes Top */
        React.createElement("div", {
          className: "absolute top-2 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIj48cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9IiMxQzFBMUEiLz48L3N2Zz4=')] opacity-50"
        }),
        React.createElement(
          "div",
          {
            className: "flex overflow-x-auto gap-0 px-0 py-8 snap-x snap-mandatory invisible-scrollbar-color items-center"
          },
          /* Film Frames */
          [
            {
              src: "/asset/panel1.1.1.jpg",
              title: "Production"
            },
            {
              src: "/asset/panel1.1.2.jpg",
              title: "Exhaust"
            },
            {
              src: "/asset/panel1.1.3.jpg",
              title: "Structure"
            },
            {
              src: "/asset/panel1.1.4.jpg",
              title: "Facade"
            },
          ].map((img, i) => React.createElement(
            "div",
            {
              key: i,
              className: "snap-center shrink-0 w-[300px] md:w-[400px] px-2 md:px-4 relative group"
            },
            React.createElement(
              "div",
              {
                className: "bg-deepBlack p-4 border-x-4 border-charcoal"
              },
              /* Glitch Photo Container using background-image for pseudo-elements */
              React.createElement("div", {
                className: "w-full aspect-[4/3] grayscale group-hover:grayscale-0 transition-all duration-500 glitch-photo bg-cover bg-center",
                style: {
                  backgroundImage: `url(${img.src})`
                }
              }),
              React.createElement(
                "p",
                {
                  className: "font-mono text-[10px] text-center mt-2 text-gray-600 group-hover:text-neonOrange"
                },
                `FRAME_0${i + 1} // ${img.title}`
              )
            )
          ))
        ),
        /* Sprocket Holes Bottom */
        React.createElement("div", {
          className: "absolute bottom-2 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIj48cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9IiMxQzFBMUEiLz48L3N2Zz4=')] opacity-50"
        })
      ),
      /* Panel 1.2: Full Width Polaroid Anchor Shot */
      React.createElement(
        "div",
        {
          className: "w-full mb-16 px-0"
        },
        React.createElement(
          "div",
          {
            className: "w-full p-3 sm:p-6 border-y border-charcoal shadow-xl group transform scale-[0.95] transition-all duration-500"
          },
          React.createElement(
            "div",
            {
              className: "w-full h-[100vh] overflow-hidden mb-4 bg-cover bg-center",
              style: {
                backgroundImage: 'url("/asset/panel1.2.3.jpg")',
              }
            }
          ),
          React.createElement(
            "div",
            {
              className: "flex flex-row justify-between items-end border-t border-gray-800 pt-4 px-2"
            },
            React.createElement(
              "div",
              null,
              React.createElement(
                "p",
                {
                  className: "font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-neonOrange mb-1"
                },
                "Chelsea Market, 1900s (left) | 2025 (right)"
              ),
              React.createElement(
                "p",
                {
                  className: "font-mono text-sm md:text-base text-gray-300 leading-tight"
                },
                "Bridge connecting former factory buildings, connecting past echoes on the High Line"
              )
            ),
            React.createElement(
              "div",
              {
                className: "hidden md:block font-mono text-[10px] text-gray-600 tracking-widest"
              },
              "FRAME_05 // Past_Present "
            )
          )
        )
      ),
      React.createElement(
        "div",
        {
          className: "max-w-7xl mx-auto px-4"
        },
        React.createElement(
          NarrativeBlock,
          {
            isQuote: true
          },
          "New York\u2019s industrial grid once produced the goods that built its identity. These buildings served as engines\u2014material, utilitarian, and unromantic. Memory begins in function, not in form."
        )
      ),
      // React.createElement(FilmStrip, null)
    ),
    /* SECTION 2: TRANSITION */
    React.createElement(
      "section",
      {
        id: "section-2",
        className: "py-20 bg-deepBlack"
      },
      React.createElement(
        "div",
        {
          className: "max-w-7xl mx-auto px-4"
        },
        React.createElement(
          "div",
          {
            className: "text-center mb-16"
          },
          React.createElement(
            "p",
            {
              className: "font-mono text-neonOrange text-glow text-xs md:text-sm uppercase tracking-[0.4em] mb-6 animate-flicker"
            },
            "Section 02"
          ),
          React.createElement(
            "h2",
            {
              className: "font-sans font-bold text-4xl md:text-5xl mt-6 text-offWhite"
            },
            "The Transition"
          ),
          React.createElement(
            "p",
            {
              className: "font-mono text-gray-500 text-sm mt-4 uppercase"
            },
            "From Production to Post-Industrial Promise"
          )
        ),
        /* Panel 2.1: Aerials - Axis Centered */
        React.createElement(
          "div",
          {
            className: "flex flex-col items-center gap-1 mb-24 relative"
          },
          React.createElement("div", {
            className: "w-[1px] h-full absolute bg-gray-800 left-1/2 top-0 -z-10"
          }),
          React.createElement(
            "div",
            {
              className: "relative w-full max-w-3xl group"
            },
            React.createElement(
              "div",
              {
                className: "absolute top-4 left-4 z-20 bg-black/70 px-3 py-1 text-xs font-mono text-gray-300 border border-gray-600"
              },
              "ARCHIVAL"
            ),
            React.createElement("img", {
              src: "/asset/panel2.1.1.jpg",
              className: "w-full h-[300px] md:h-[400px] object-cover grayscale filter contrast-125 border border-gray-800",
              alt: "Old Aerial"
            })
          ),
          React.createElement("div", {
            className: "h-12 w-[1px] bg-neonOrange text-glow"
          }),
          React.createElement(
            "div",
            {
              className: "relative w-full max-w-3xl group"
            },
            React.createElement(
              "div",
              {
                className: "absolute top-4 left-4 z-20 bg-black/70 px-3 py-1 text-xs font-mono text-neonOrange border border-neonOrange/50"
              },
              "CURRENT"
            ),
            React.createElement("img", {
              src: "/asset/panel2.1.2.jpg",
              className: "w-full h-[300px] md:h-[400px] object-cover border border-gray-800 shadow-2xl",
              alt: "New Aerial"
            })
          )
        ),
        /* Panel 2.2: Interior Shift - Side by Side, Unrotated */
        React.createElement(
          "div",
          {
            className: "grid md:grid-cols-2 gap-6 md:gap-8 mb-12"
          },
          React.createElement(Polaroid, {
            src: "/asset/panel2.2.2.jpg",
            alt: "Machinery",
            location: "Rebrand",
            caption: "Machinery left behind. A new function.",
            filter: "sepia",
            rotation: "rotate-0",
            className: "bg-black border-gray-800"
          }),
          React.createElement(Polaroid, {
            src: "/asset/panel2.2.1.jpg",
            alt: "Empty Loft",
            location: "Reassigned",
            caption: "Metal beams and exposed brick, from structure to aesthetic.",
            filter: "none",
            rotation: "rotate-0",
            className: "bg-black border-gray-800"
          })
        ),
        React.createElement(
          NarrativeBlock,
          {
            isQuote: true,
            alignment: "center"
          },
          "As manufacturing receded, vast industrial frames drifted into an urban pause. This liminal state opened space for a new economy to imagine itself."
        )
      )
    ),
    /* SECTION 3: THE NEW LIFE - FULL WIDTH REDESIGN */
    React.createElement(
      "section",
      {
        id: "section-3",
        className: "py-0"
      },
      /* 3.1 Full Width Corporate Presence */
      React.createElement(
        "div",
        {
          className: "relative w-full h-screen"
        },
        React.createElement("div", {
          className: "absolute inset-0 bg-black/40 z-10"
        }),
        React.createElement("img", {
          src: "/asset/panel3.1.jpg",
          className: "w-full h-full object-cover grayscale",
          alt: "Corporate Lobby"
        }),
        React.createElement(
          "div",
          {
            className: "absolute inset-0 z-20 flex flex-col items-center justify-center text-center"
          },
          React.createElement(
            "p",
            {
              className: "font-mono text-neonOrange text-glow text-xs md:text-sm uppercase tracking-[0.4em] mb-6 animate-flicker"
            },
            "Section 03"
          ),
          React.createElement(
            "h2",
            {
              className: "font-sans font-black text-6xl md:text-8xl text-white uppercase tracking-tight"
            },
            "A New Identity"
          ),
          React.createElement(
            "p",
            {
              className: "font-mono text-white bg-black/50 px-4 py-2 mt-4 backdrop-blur-md"
            },
            "Curated Authenticity & Different Purpose"
          )
        )
      ),
      /* 3.2 Full Width Grid */
      React.createElement(
        "div",
        {
          className: "grid grid-cols-2 md:grid-cols-4 gap-0"
        },
        [
          "/asset/panel3.1.4.jpeg",
          "/asset/panel3.1.2.jpg",
          "/asset/panel3.1.3.jpg",
          "/asset/panel3.1.1.jpg"
        ].map((src, idx) => React.createElement(
          "div",
          {
            key: idx,
            className: "relative aspect-square group overflow-hidden"
          },
          React.createElement("img", {
            src: src,
            className: "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700",
            alt: `Grid ${idx}`
          }),
          React.createElement("div", {
            className: "absolute inset-0 bg-neonOrange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"
          })
        ))
      ),
      React.createElement("img", {
          src: "/asset/panel3.2.jpg",
          className: "w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700",
          alt: "Corporate Lobby"
        }),
      /* 3.3 Massive Polaroid End */
      React.createElement(
        "div",
        {
          className: "bg-deepBlack py-32 flex justify-center"
        },
        React.createElement(
          "div",
          {
            className: "max-w-2xl w-full px-4"
          },
          React.createElement(Polaroid, {
            src: "/asset/panel3.3.jpg",
            alt: "Final Product",
            caption: "The past reframed as an product.",
            location: "Global Capital",
            aspectRatio: "portrait",
            rotation: "rotate-0",
            className: "transform scale-100 md:scale-110 bg-black"
          })
        )
      ),
      React.createElement(
        "div",
        {
          className: "max-w-7xl mx-auto px-4 pb-20"
        },
        React.createElement(
          NarrativeBlock,
          {
            isQuote: true,
            alignment: "center"
          },
          "Authenticity is preserved, edited, and monetized\u2014the past reframed as an asset in the global cultural marketplace."
        )
      )
    ),
    React.createElement(FilmStrip, null),
    /* SECTION 4: REFLECTION */
    React.createElement(
      "section",
      {
        id: "section-4",
        className: "py-24 pb-40 bg-[#0E0E0E]"
      },
      React.createElement(
        "div",
        {
          className: "max-w-7xl mx-auto px-4"
        },
        React.createElement(
          "div",
          {
            className: "text-center mb-16"
          },
          React.createElement(
            "p",
            {
              className: "font-mono text-neonOrange text-glow text-xs md:text-sm uppercase tracking-[0.4em] mb-6 animate-flicker"
            },
            "Section 04"
          ),
          React.createElement(
            "h2",
            {
              className: "font-sans font-bold text-4xl md:text-5xl mt-6 text-offWhite"
            },
            "Looking Back, Moving Forward"
          ),
          React.createElement(
            "p",
            {
              className: "font-mono text-gray-500 text-sm mt-4 uppercase"
            },
            "Coexistence, Tension & The City as Archive"
          )
        ),
        React.createElement(
        "div",
        {
          className: "w-full mb-16 px-0"
        },
        React.createElement(
          "div",
          {
            className: "w-full p-3 sm:p-6 border-y border-gray-800 shadow-xl group transform scale-[0.95] transition-all duration-500"
          },
          React.createElement(
            "div",
            {
              className: "w-full h-[100vh] overflow-hidden mb-4 bg-cover bg-center",
              style: {
                backgroundImage: 'url("/asset/panel4.0.1.jpg")',
              }
            }
          ),
          React.createElement(
            "div",
            {
              className: "flex flex-row justify-between items-end border-t border-gray-800 pt-4 px-2"
            },
            React.createElement(
              "div",
              null,
              React.createElement(
                "p",
                {
                  className: "font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-neonOrange mb-1"
                },
                "Preserved Memory"
              ),
              React.createElement(
                "p",
                {
                  className: "font-mono text-sm md:text-base text-gray-300 leading-tight"
                },
                "History locked in place, a distant memory preserved within modern utility."
              )
            ),
            React.createElement(
              "div",
              {
                className: "hidden md:block font-mono text-[10px] text-gray-600 tracking-widest"
              },
              "Chelsea Market, 2025"
            )
          )
        )
      ),
        /* Coexistence Montage - Converted to Polaroids */
        React.createElement(
          "div",
          {
            className: "relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-32"
          },
          /* Lived City */
          React.createElement(Polaroid, {
            src: "/asset/panel4.2.1.jpg",
            alt: "Local Market",
            location: "Rebuilt for Modern Life",
            caption: "Aestheticized history, gentrified streets.",
            aspectRatio: "portrait",
            filter: "none",
            className: "bg-black border-gray-900"
          }),
          /* Staged City - Staggered */
          React.createElement(Polaroid, {
            src: "/asset/panel4.2.2.jpg",
            alt: "Retail",
            location: "Old in New",
            caption: "Old-school industry surviving in increasingly different city than the one it was built for.",
            aspectRatio: "portrait",
            filter: "none",
            className: "bg-black border-gray-900"
          })
        ),
        React.createElement(
          "div",
          {
            className: "max-w-3xl mx-auto text-center px-4"
          },
          React.createElement(
            "p",
            {
              className: "font-mono text-lg md:text-xl leading-relaxed text-gray-200"
            },
            React.createElement(
              "span",
              {
                className: "text-neonOrange"
              },
              "“"
            ),
            "These buildings no longer merely store goods\u2014they store histories. In their overlaps and contradictions, architecture becomes a living archive, rewriting its memory with every new use.",
            React.createElement(
              "span",
              {
                className: "text-neonOrange"
              },
              "”"
            )
          )
        ),
        /* Memory Gradient Strip */
        React.createElement(
          "div",
          {
            className: "my-20"
          },
          React.createElement(
            "h4",
            {
              className: "font-mono text-center text-xs text-neonOrange mb-6 tracking-widest"
            },
            "MEMORY  \u2022  SPACE  \u2022  GLOBAL CITY"
          ),
        ),
        React.createElement(
          "p",
          {
            className: "font-mono text-neonOrange text-glow text-xs md:text-sm uppercase tracking-[0.4em] mb-6 animate-pulse text-center"
          },
          "curated by Joseph H. D."
        ),
      )
    ),
  );
};

export default App;