import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class SemiCustom extends React.Component{
    render() {
        var divStyles = { backgroundImage: 'url(' + 'modelPages/semiCus1.jpg' + ')' };
        return (
            <div>
                <div>
                    <span className="semi"></span>
                    <span className="semiBack" style={divStyles}></span>
                </div>
                <div className="semiHome">
                    <Link to="#/home"><Home/></Link>
                    </div>
                <div className="semiContent">
                    <h3>The Semi-Custom Body</h3>
                    <p>
                        These Bodies are hand carved and detailed....not a 
                        one is exactly the same.
                    </p>
                    <p>
                        Check aut the Gallery page for some crazy ideas.
                    </p>
                </div>
            </div>
        );
    }
}