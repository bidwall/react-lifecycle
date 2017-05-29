import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(`Input value: ${event.target.value}`);
        this.setState({ name: event.target.value});
    }

    handleSubmit(event) {
        alert(`Submitting: ${this.state.name}`);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );        
    }
}

export default Input;