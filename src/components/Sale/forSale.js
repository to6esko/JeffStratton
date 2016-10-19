import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class ForSale extends React.Component{
    render() {
        var divStyle = { backgroundImage: 'url(' + 'img/pages/contactLinks.jpg' + ')' };
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
                                <img src="img/gallery/gallery1.jpg" alt=""/>
                                
                            </div>
                            <div className="image-two">
                                <img src="img/gallery/gallery2.jpg"  alt=""/>
                                
                            </div>
                            <div className="image-three">
                                <img src="img/gallery/gallery3.jpg"  alt=""/>
                                
                            </div>
                            <div className="image-four">
                                <img src="img/gallery/gallery4.jpg"  alt=""/>
                                
                            </div>
                            <div className="image-five">
                                <img src="img/gallery/gallery5.jpg"  alt=""/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}