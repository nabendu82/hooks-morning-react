import React, { Component } from 'react';

class ClassCounter1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('componentDidMount called');
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate called');
        document.title = `Clicked ${this.state.count} times`;
    }
    
    render() {
        return (
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click {this.state.count}</button>
        );
    }
}

export default ClassCounter1;
