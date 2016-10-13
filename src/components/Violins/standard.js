import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class Standard extends React.Component{
    render() {
        var divStyles = { backgroundImage: 'url(' + 'modelPages/standard.jpg' + ')' };
        return (
            <div>
                <div>
                    <span className="standard"></span>
                    <span className="standardBack" style={divStyles}></span>
                </div>
                <div className="standardHome">
                <Link to="#/home"><Home/></Link>
                </div>
                <div className="standardContent">
                    <h2>Standard</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.In eleifend ipsum leo.Fusce sit amet libero ac quam fringilla tempus nec nec massa.Cras euismod, dui varius posuere consequat, mi augue tristique nisl, eu mattis velit justo ac velit.Proin viverra quam vel aliquam lacinia.Quisque aliquet tincidunt faucibus.
                    </p>
                    <p>
                        Cras id lorem nibh.Maecenas nec ornare nulla, ornare pretium dolor.Maecenas quis scelerisque nisl.Praesent efficitur, urna sit amet facilisis lacinia, elit odio porta leo, in pharetra neque odio nec elit.Praesent pretium ipsum mauris, et porttitor sapien varius in.Donec scelerisque risus quis fermentum finibus.Duis consectetur euismod vestibulum.
                    </p>
                </div>
            </div>    
        );
    }
}