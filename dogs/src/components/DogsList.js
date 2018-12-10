

import React, {Component} from 'react'


class DogsList extends Component {
  
    render() {
        const listObj = this.props.list;
        console.log(listObj);
        const listArr = [];
        const btnShowDog = <button className="btn btn-dark float-right" >Show it</button>;
        
        for (var propName in listObj) {

            if(listObj[propName].length > 0) {
                let subBreeds = 
                        listObj[propName]
                            .map(subBreed => (
                                <li key ={subBreed.toString()} className="list-group-item">
                                    {subBreed}
                                    {btnShowDog}
                                </li>
                            ));
                
                let item = 
                    <li className="list-group-item" key = {propName.toString()}>
                    <span className="">{propName + ':'}</span> <br/>
                        <ul className="list-group">
                            {subBreeds}
                        </ul>
                    </li>;
                listArr.push(item);
            } else {

                let item = 
                <li key = {propName.toString()} className="list-group-item">
                    {propName}
                    {btnShowDog}
                </li>;
                listArr.push(item);
            }
        }

        return (
            <ul className="list-group">
                {listArr}
            </ul>
        )
    }

}

export default DogsList;