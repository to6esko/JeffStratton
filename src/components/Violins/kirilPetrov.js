import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';
import BrowserUtil from 'lib/BrowserUtil';

export default class KirilPetrov extends React.Component{
    render() {
        const browserUtil = new BrowserUtil();
        
        var divStyles = { backgroundImage: 'url(' + browserUtil.convertImagePath('img/modelPagesOpt/vio2.jpg') + ')' };
        return (
            <div className="section-inner">
                <div>
                    <span className="kikiPetrov"></span>
                    <span className="back" style={divStyles}></span>
                </div>
                <div className="modelHome">
                    <Link to="#/home"><Home/></Link>
                </div>
                <div className="content">
                    <h3 className="price">The</h3>
                    <h3 className="price1">Kiril Petrov Body</h3>
                    <p className="name">
                        They speak for themselves... they are out <br/>of this world.
                    </p>
                    <p className="name">
                        Each violin is a one of a kind master piece.
                    </p>
                    <p className="name">
                        Hand painted, signed, and numbered.
                    </p>
                    <p className="name">
                        Contact me for more info.
                    </p>
                </div>
            </div>
        );
    }
}