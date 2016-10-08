import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class KirilPetrov extends React.Component{
    render() {
        var divStyle = { backgroundImage: 'url(' + '../../modelPages/kikiModel.jpg' + ')' };
        return (
            <div>
                <div>
                    <span className="kikiPetrov" style={divStyle}></span>
                </div>
                <div className="kikiHome">
                    <Link to="#/home"><Home/></Link>
                    <h2>Kiril Petrov</h2>
                </div>
            </div>
        );
    }
}