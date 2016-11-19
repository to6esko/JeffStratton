import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class RobertKantor extends React.Component{
    render() {
        var divStyles = { backgroundImage: 'url(' + 'img/modelPagesOpt/kantor1.jpg' + ')' };
        return (
            <div className="section-inner">
                <div>
                    <span className="kantor"></span>
                    <span className="back" style={divStyles}></span>
                </div>
                <div className="modelHome">
                    <Link to="#/home"><Home/></Link>
                 </div>
                <div className="content">
                    <h3 className="price">The</h3>
                    <h3 className="price1">Robert Kantor Body</h3>
                    <p className="name">Kantor Guitars are famous for there work</p>
                    <p className="name">with Swarovski Elements.</p>
                    <p className="name">There work is perfect to say the least.</p>
                    <p className="name">These violins are custom order only.</p>
                    <p className="name"> Contact me for more info.</p>
                </div>
            </div>
        );
    }
}