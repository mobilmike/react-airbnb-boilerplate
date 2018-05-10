import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import '../sass/styles.scss';
import ChatBot from 'react-simple-chatbot';

render(
  <App />,
  document.getElementById('root'),
);
