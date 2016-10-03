import React from 'react';


export default class Violins extends React.Component{
    render() {
        return (
            <div>
                <h2>Violins</h2>
                {this.props.children}
            </div>
        );
    }
}