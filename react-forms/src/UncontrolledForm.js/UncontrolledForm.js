import React from "react";

export class UncontrolledForm extends React.Component{

    constructor(props) {
        super(props);
        this.handleSubmit  = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Uncontrolled Form Elements</h3>
                Text:
                <input type="text" ref={this.input}/>
            </form>
        );
    }
}