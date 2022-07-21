import React from 'react';

// 👇️ import css
import './index.css';


import {createRoot} from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <App />
);
