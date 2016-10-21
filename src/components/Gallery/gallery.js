import React from 'react';
import { Link } from 'react-router';
import Home from 'components/Home/home';


const images = [
    {
        src: "img/galleryOpt/back2.jpg"
    },
    {
        src: "img/galleryOpt/galery3.jpg"
    },
    {
        src: "img/galleryOpt/galery2.jpg"
    },
    {
        src: "img/galleryOpt/galery5.jpg"
    },
    {
        src: "img/galleryOpt/galery1.jpg"
    },
    {
        src: "img/galleryOpt/galery4.jpg"
    }
]

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images
        };
    }

    componentDidMount() {
        var pic = document.getElementsByClassName('myImg');
        var modal = document.getElementById('myModal');
        var modalImg = document.getElementById("img01");
        for (var i = 0; i < pic.length; i++) {
            pic[i].addEventListener("click", function () {
                modal.style.display = "block";
                modalImg.src = this.src;
            });
        }

        var span = document.getElementsByClassName("close")[0];
        span.addEventListener('click', function () {
            modal.style.display = "none";
        });

    }
    render() {
        const picture = this.state.images.map((pic, i) => {
            return (
                <div className="image" key={i}>
                    <img className="myImg" key={i} src={pic.src} />
                    <div id="myModal" className="modal">
                        <span className="close">×</span>
                        <img className="modal-content" id="img01" key={i} src={pic.src} />
                    </div>
                </div>
            )
        });
        var divStyle = { backgroundImage: 'url(' + 'img/pagesOpt/gallery.jpg' + ')' };
        return (
            <div className="gallery-content">
                <div>
                    <span className="gallery" style={divStyle}></span>
                    <div className="galleryHome">
                        <Link to="#/home"><Home /></Link>
                        <h3>Gallery</h3>
                    </div>
                </div>
                <div className="gallery-clearfix">
                    <div className="galleryImages">
                        <div >
                            {picture}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}








/*
export default class Gallery extends React.Component {
    componentDidMount() {
        var modal = document.getElementById('myModal');
        var images = document.getElementById('myImg');
        var modalImg = document.getElementById("img01");
        images.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
        var span = document.getElementsByClassName("close")[0];
        span.addEventListener('click', function () {
            modal.style.display = "none";
        });
    }
    render() {
        var divStyle = { backgroundImage: 'url(' + 'img/pagesOpt/gallery.jpg' + ')' };
        return (
            <div className="gallery-content">
                <div className="section-inner">
                    <span className="gallery" style={divStyle}></span>
                    <div className="galleryHome">
                        <Link to="#/home"><Home /></Link>
                        <h3>Gallery</h3>
                    </div>
                </div>
                <div className="gallery-clearfix">
                    <div className="galleryImages">
                        <div>
                            <div className="image-one">
                                <img id="myImg" src="img/galleryOpt/back2.jpg" alt="" />
                                <div id="myModal" className="modal">
                                    <span className="close">×</span>
                                    <img className="modal-content" id="img01" />
                                </div>
                            </div>
                        </div>

                        <div className="image-one">
                            <img src="img/galleryOpt/galery3.jpg" alt="" />

                        </div>
                        <div className="image-one">
                            <img src="img/galleryOpt/galery2.jpg" alt="" />

                        </div>
                        <div className="image-one">
                            <img src="img/galleryOpt/galery5.jpg" alt="" />

                        </div>
                        <div className="image-one">
                            <img src="img/galleryOpt/deal2.jpg" alt="" />

                        </div>
                        <div className="image-one">
                            <img src="img/galleryOpt/galery1.jpg" alt="" />

                        </div>
                        <div className="image-one">
                            <img src="img/galleryOpt/galery4.jpg" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

*/