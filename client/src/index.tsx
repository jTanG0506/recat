import React from 'react';
import { render } from 'react-dom';
import { Listings } from "./sections";
import * as serviceWorker from './serviceWorker';

render(
  <React.StrictMode>
    <Listings title="Recat Listings" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
