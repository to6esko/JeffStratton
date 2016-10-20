import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';

export default class Gallery extends React.Component{
    render() {
        var divStyle = { backgroundImage: 'url(' + 'img/pagesOpt/gallery.jpg' + ')' };
        return (
            <div className="gallery-content">
                <div className="section-inner">
                    <span className="gallery" style={divStyle}></span>
                    <div className="galleryHome">
                        <Link to="#/home"><Home/></Link>
                        <h3>Gallery</h3>
                    </div>
                    <div className="gallery-clearfix">
                        <div className="galleryImages">
                            <div className="image-one">
                                <img src="img/galleryOpt/back2.jpg" alt=""/>
                                
                            </div>
                            <div className="image-two">
                                <img src="img/galleryOpt/galery3.jpg" alt=""/>
                                
                            </div>
                            <div className="image-three">
                                <img src="img/galleryOpt/galery2.jpg" alt=""/>
                                
                            </div>
                            <div className="image-four">
                                <img src="img/galleryOpt/galery5.jpg" alt=""/>
                               
                            </div>
                            <div className="image-five">
                                <img src="img/galleryOpt/deal2.jpg"  alt=""/>
                                
                            </div>
                            <div className="image-six">
                                <img src="img/galleryOpt/galery1.jpg"  alt=""/>
                                
                            </div>
                            <div className="image-seven">
                                <img src="img/galleryOpt/galery4.jpg"  alt=""/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}