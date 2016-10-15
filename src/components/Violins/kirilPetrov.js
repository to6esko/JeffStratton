import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class KirilPetrov extends React.Component{
    render() {
        var divStyles = { backgroundImage: 'url(' + 'modelPages/kikiModel.jpg' + ')' };
        return (
            <div>
                <div>
                    <span className="kikiPetrov"></span>
                    <span className="kikiBack" style={divStyles}></span>
                </div>
                <div className="kikiHome">
                    <Link to="#/home"><Home/></Link>
                </div>
                <div className="kikiContent">
                    <h3 className="price">The</h3>
                    <h3 className="price1">Kiril Petrov Body</h3>
                    <p className="name">
                        These is hot inveh to be said..... they are <br/>bit of this wovlot.
                        
                    </p>
                    <p className="name">
                        Contact me for more info.
                    </p>
                </div>
            </div>
        );
    }
}