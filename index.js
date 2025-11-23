import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // NOTE: Path updated to .js

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  /* In a real compilation step, <React.StrictMode> would remain, 
     but the JSX within <App /> is usually translated into 
     React.createElement calls or equivalent JS structures.
     For simplicity in this step, we keep the file structure 
     and rely on the environment's ability to handle the imported modules. */
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
  )
);