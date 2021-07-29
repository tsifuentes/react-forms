import React from "react";

export class UncontrolledForm extends React.Component{

    constructor(props) {
        super(props);
        this.handleSubmit  = this.handleSubmit.bind(this);
        this.input = React.createRef();
        this.input.current = "";
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    onChange(event){
        event.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Uncontrolled Form Elements</h3>
                Text:
                <input type="text" value="" ref={this.input} onChange={this.onChange}/>
            </form>
        );
    }
}