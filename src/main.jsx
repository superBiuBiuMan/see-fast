import { render } from 'preact';
import { App } from './app';
import "tdesign-react/es/style/index.css";
/*import "reset-css";*/
render(
  <App />,
  (() => {
    const app = document.createElement('div');
    const dom = document.querySelector('.AppHeader-globalBar-end');
    const domF = document.querySelector('.AppHeader-search');
    console.error(dom,domF)
    dom.insertBefore(app,domF);
    return app;
  })(),
);
