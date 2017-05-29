import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Your name is {this.props.name}
            </div>
        );
    }
}

export default Display;