import React from 'react';
import {render} from 'react-dom';
import App from './components/App';







fetch('https://dog.ceo/api/breeds/list/all')
.then(response => {
    return response.json()
 })                
.then(json => {
    render(<App list={json.message}/>, document.getElementById('root'));
}); 
 


