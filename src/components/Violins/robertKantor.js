import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class RobertKantor extends React.Component{
    render() {
        var divStyles = { backgroundImage: 'url(' + 'modelPages/kantorModel.jpg' + ')' };
        return (
            <div>
                <div>
                    <span className="kantor"></span>
                    <span className="kantorBack" style={divStyles}></span>
                </div>
                <div className="kantorHome">
                    <Link to="#/home"><Home/></Link>
                 </div>
                <div className="kantorContent">
                    <h3 className="price">The</h3>
                    <h3 className="price1">Robert Kantor Body</h3>
                    <p className="name">
                        These violins are custom order only.
                    </p>
                    <p className="name"> Contact me for more info.</p>
                </div>
            </div>
        );
    }
}