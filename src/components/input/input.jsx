import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(`Input value: ${event.target.value}`);
        this.props.onInputChange(event.target.value);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Enter your name" onChange={this.handleChange} />
            </div>
        );        
    }
}

export default Input;