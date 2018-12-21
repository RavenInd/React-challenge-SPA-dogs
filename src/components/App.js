import React, {Component} from 'react';
import ListContainer from './ListContainer';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component{
    
    render () {
        const {list} = this.props;
        
        return (
            <div className="container" >
                <NavBar />
                <ListContainer list={list}/>
                
            </div>
        );
    }  
}


export default App;


