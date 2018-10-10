import React, { Component } from 'react';

class TextBox extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.changeTextInState(event.target.value)
    }

    render() {
        return (        
            <form style={{
                position: 'relative',
                height: 'inherit',
                padding: 0,
                margin: 0,                                
            }}>
                <textarea style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '200px',
                }}
                placeholder={this.props.inputText}
                value={this.props.inputText}
                onChange={this.handleChange}
                id="editor"            
                ></textarea>
            </form>
        );
    }
}

export { TextBox };
