import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Menu from './Menu';

ReactDOM.render(
  <React.StrictMode>
    <Container maxWidth="md">
      <Grid
        container
        spacing={1}
      >
        <Grid item sm={8} xs={12}>
          <Header />
          <Menu />
        </Grid>
        <Grid item sm={4} xs={12}>
          <App />
        </Grid>
      </Grid>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
