import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';


//ReactDOM.render(<ProductList />,document.getElementById("root"))
//ReactDOM.render(<ViewProduct />,document.getElementById("root"))
//ReactDOM.render(<App />,document.getElementById("root"));
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById("root"));