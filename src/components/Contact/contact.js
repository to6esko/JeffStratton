import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';
import Leault from 'components/leault';

export default class Contact extends React.Component{
    render() {
        let divStyle = { backgroundImage: 'url(' + 'pages/contactLinks.jpg' + ')' };
        let instaramImg = { backgroundImage: 'url(' + 'icons/Instagram-icon.png' + ')', width: 25, height: 25 };
        let faceBookImg = { backgroundImage: 'url(' + 'icons/facebook-icon.png' + ')', width: 25, height: 25 };
        let pinterestImg = { backgroundImage: 'url(' + 'icons/pinterest-icon.png' + ')', width: 25,height:25};
        return (
            <div>
                <div>
                    <span className="contact" style={divStyle}></span>
                </div>
                <div className="contactHome">
                    <Link to="#/home"><Home/></Link>
                </div>
                <div className="leaultContact">
                    <Leault/>
                </div>
                <div className="contactList">
                    <div className="contacts">
                        <h2>Contact:</h2>
                        <p>
                            Phone: 760-444-4161
                        </p>
                        <p>
                            Jeff Stratton
                            </p>
                        <p>
                            Email: jeff@strattonviolin.com
                            </p>
                    </div>
                    <div className="social">
                        <h2>Social:</h2>
                        <p>
                            <a href="https://www.facebook.com/Stratton-Violin-356861030998166/" style={faceBookImg} className="socialFaceBook" target="_blank">FaceBook</a>
                            </p>
                        <p>
                            <a href="https://www.instagram.com/p/BBY5x-RNTGN/" style={instaramImg} className="socialInstagram" target="_blank">Instagram</a>
                        </p>
                        <p>
                            <a href="https://www.pinterest.com/pin/458030224579731449/" style={pinterestImg} className="socialPinterest" target="_blank">Pinterest</a>
                            </p>
                    </div>
                </div>
            </div>
        );
    }
}