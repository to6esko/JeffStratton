import React from 'react';

let images = [
    {
        img:'../../pageSlider/1.jpg'
    },
    {
        img:'../../pageSlider/2.JPG'
    },
    {
        img:'../../pageSlider/3.JPG'
    }
]

export default class SlideShow extends React.Component{
    constructor() {
        super();
        this.state = {
            links: images,
            operator: "PLUS",
            pointer: 0
        };
    }
    
    componentDidMount() {
        var self = this;
        setInterval(function () {
            var pointer = self.state.pointer;
            var operator = self.state.operator;

            if (pointer === self.state.links.length - 1) {
                operator = "MINUS";
            } else if (pointer <= 0) {
                operator = "PLUS";
            }
            operator === "PLUS" ? pointer++ : pointer--;

            console.log("operator " + operator);
            console.log("pointer " + pointer);

            self.setState({ operator: operator, pointer: pointer });
        }, 2000);
    }
    render() {
        var pointedImage = this.state.links[this.state.pointer];
        console.log("pointedImage " + pointedImage.img);
        console.log("pointer " + this.state.pointer);
        var imageStyle = { backgroundImage: 'url(' + pointedImage.img + ')', };
        return (
            <div id="slideShow">
                <div style={imageStyle}>
                </div>
            </div>
        );
    }
}


