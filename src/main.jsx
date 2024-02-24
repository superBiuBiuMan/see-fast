import { render } from 'preact';
import { App } from './app';
import './index.css';


render(
  <App />,
  (() => {
    const app = document.createElement('div');
    const dom = document.querySelector('.AppHeader-globalBar-end');
    const domF = document.querySelector('.AppHeader-search');
    console.log(dom,domF)
    dom.insertBefore(app,domF);
    return app;
  })(),
);
