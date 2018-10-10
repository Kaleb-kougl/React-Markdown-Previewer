import React, { Component } from 'react';
const marked = require('marked');

class Output extends Component {
    constructor(props) {
        super(props)

        
    }

    markitUp(a) {
        return {__html: a};
    }

    render() {
        return (
            <div style={{
                position: 'relative',
                height: 'inherit',
                padding: 0,
                margin: 0,
                width: '100%',
                boxSizing: 'border-box',
                minWidth: '100%',
                maxWidth: '100%',
                minHeight: '200px',
                textAlign: "left",
                }}
                dangerouslySetInnerHTML = {this.markitUp(marked(this.props.outputText))}
                id="preview"
            />
            
        );
    }
}

export { Output };
