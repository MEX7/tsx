import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloSFC from "./components/HelloSFC";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <HelloSFC name="TypeScript" enthusiasmLevel={10} />,
    document.getElementById('root') as HTMLElement
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();