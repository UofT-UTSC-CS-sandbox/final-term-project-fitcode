import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import HomePage from './Pages/HomePage'

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<HomePage />);