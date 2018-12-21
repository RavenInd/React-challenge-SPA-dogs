import React, {Component} from 'react';




class NavBarButton extends Component {
    render () {
        let {name} = this.props;
        return (
            <li className="nav-item active">
                                
            <a className="nav-link btn btn-lg" 
                href={"#" + name.split(' ').join('')}
                style ={{color: 'white', 
                        fontSize: '45px', 
                        background: 'rgba(120, 120, 120, 0.6)',
                        margin: '0 10px',
                        fontFamily: 'Roboto'}}>
                        {name}
                        <span className="sr-only">(current)</span>
            </a>
        </li>

        )
    }
}
export default NavBarButton;