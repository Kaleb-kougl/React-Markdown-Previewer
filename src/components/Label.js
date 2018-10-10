import React, { Component } from 'react';

class Label extends Component {
    render() {
        return (
            <div style={{
                flex: 1,
                backgroundColor: 'rgb(124, 78, 120)',
                padding: 0,
                margin: 0,
                boxShadow: '0px 3px 3px 0px rgba(0,0,0,0.75)',
                zIndex: 50,
            }}>
                This is a label component
            </div>
        );
    }
}

export { Label };