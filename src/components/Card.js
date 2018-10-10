import React, { Component } from 'react';
import { Label } from './Label';
import { TextBox } from './TextBox';
import { Output } from './Output';

class Card extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        let textbox;
        console.log(this.props.output);

        if (this.props.output === 1 ) {
            textbox = <TextBox 
            inputText={this.props.inputText}
            changeTextInState={this.props.changeTextInState}    
        />;
        console.log(true);
        } else {
            textbox = <Output
                outputText={this.props.inputText}
            />;
            console.log(false);
        }

        return(
            <div style={{             
                minWidth: '60em',
                maxWidth: '60em',                 
                backgroundColor: '#DCDCDC', 
                textAlign: 'center', 
                alignSelf: 'center', 
                padding: '0px', 
                boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
                margin: 30,
            }}>
            <Label />
            {textbox}
            </div>
        );
    }
}

export { Card };