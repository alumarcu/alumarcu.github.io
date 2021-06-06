import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './Components/Layout'

function Foo() {
  return <div>Not much!</div>
}

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);
