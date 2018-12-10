import React, {Component} from 'react';




class NavBarButton extends Component {
    render () {
        let {name} = this.props;
        return (
            <li className="nav-item active">
                                
            <a className="nav-link btn btn-lg" 
                href={"#" + name.split(' ').join('')}
                style ={{color: 'white', 
                        fontSize: '50px', 
                        background: 'rgba(140, 60, 180, 0.5)',
                        margin: '0 10px'}}>
                        {name}
                        <span className="sr-only">(current)</span>
            </a>
        </li>

        )
    }
}
export default NavBarButton;