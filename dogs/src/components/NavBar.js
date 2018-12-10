import React, {Component} from 'react';
import NavBarButton from './NavBarButton'




class NavBar extends Component {
    render () {
        
        return (
            <div className="jumbotron navbar navbar-expand-lg bg-light" 
                 style={{background: 'url("https://getleashedmag.com/wp-content/uploads/2017/04/shutterstock_166118261-720x254@2x.jpeg") no-repeat 50% 50%'}}>

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