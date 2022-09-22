import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/app/app"


const text = "hello world"

const elem = (
<div>
   <h2 className='text'>Это переменная: {text}</h2>
   <input type="text"/>
   <button>click</button>
   
</div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <App />
 

);

