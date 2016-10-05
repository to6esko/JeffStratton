import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

let images = [
    {
        img:'../../pageSliders/1.jpg'
    },
    {
        img:'../../pageSliders/2.jpg'
    },
    {
        img:'../../pageSliders/3.jpg'
    },
    {
        img:'../../pageSliders/4.jpg'
    },
    {
        img:'../../pageSliders/5.jpg'
    },
    {
        img:'../../pageSliders/6.jpg'
    },
    {
        img:'../../pageSliders/7.jpg'
    },
    {
        img:'../../pageSliders/8.jpg'
    },
    {
        img:'../../pageSliders/9.jpg'
    },
    {
        img:'../../pageSliders/10.jpg'
    }
]

export default class Sliders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: images,
            myIndex: 0
        };
    }
    countInterval() {
        var i,
            self = this,
            myIndex = self.state.myIndex,
            counter = self.state.links;
        
            for (i = 0; i < counter.length-1; i++) {
                counter = counter[i];
            }
            myIndex++;
            if (myIndex > self.state.links.length - 1) {
                myIndex = 0;
            }
            self.setState({ links: self.state.links, myIndex });
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.countInterval();
        }, 2000); 
    }
    componentWillUnmount() {
        clearInterval(this.interval);
  }
    
    render() {
        var pointedImage = this.state.links[this.state.myIndex];
        var imageStyle = {
            color: 'white',
            backgroundImage: 'url(' + pointedImage.img + ')',
            WebkitTransition: 'all',
            msTransition: 'all'
        };
        return (
            <div>
                <ReactTransitionGroup
                    transitionName="slideShow"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    <span style={imageStyle}>{this.props.children}</span>
                </ReactTransitionGroup>
            </div>
        );
    }
}