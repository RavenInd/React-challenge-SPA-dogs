import React, {Component} from 'react';
import DogsList from './DogsList';


class ListContainer extends Component {
    state = {
        isOpen: false
    }
    
    render() {
        const {list} = this.props;
 

        return (
            <div className="card" style={{width: '60%', margin: "0 auto", height: "65vh", overflow: 'scroll'}}>
                <DogsList list={list}/>
            </div>
        )
        }

}





export default ListContainer;