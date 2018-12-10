import React, {Component} from 'react';
import NavBarButton from './NavBarButton'




class NavBar extends Component {
    render () {
        
        return (
            <div className="jumbotron navbar navbar-expand-lg bg-light" 
                 style={{background: 'url("https://apdt.com/wp-content/themes/apdt/img/hero10.jpg") no-repeat 0 60%',
                        backgroundSize : "110%"}}>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavBarButton name="Dogs List" />
                        <NavBarButton name="Current Dog" />
                    </ul>
                </div>
            </div>
            )
    }
}

export default NavBar;