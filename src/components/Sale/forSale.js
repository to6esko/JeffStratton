import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class ForSale extends React.Component{
    render() {
        var divStyle = { backgroundImage: 'url(' + 'pages/contactLinks.jpg' + ')' };
        return (
            <div className="forSale-content">
                <div className="section-inner">
                    <span className="forSale" style={divStyle}></span>
                    <div className="forSaleHome">
                        <Link to="#/home"><Home/></Link>
                        <h3>For Sale</h3>
                    </div>
                    <div className="gallery-clearfix">
                        <div className="galleryImages">
                            <div className="image-one">
                                <img src="gallery/gallery1.jpg" width="230px" height="350px" alt=""/>
                                
                            </div>
                            <div className="image-two">
                                <img src="gallery/gallery2.jpg" width="230px" height="350px" alt=""/>
                                
                            </div>
                            <div className="image-three">
                                <img src="gallery/gallery3.jpg" width="230px" height="350px" alt=""/>
                                
                            </div>
                            <div className="image-four">
                                <img src="gallery/gallery4.jpg" width="230px" height="350px" alt=""/>
                                
                            </div>
                            <div className="image-five">
                                <img src="gallery/gallery5.jpg" width="230px" height="350px" alt=""/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}