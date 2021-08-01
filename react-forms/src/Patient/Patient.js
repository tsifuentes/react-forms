import React from "react";

export class Patient extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            lastName: '',
            birthdate: '',
            phoneNumber: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        let value = {};
        value[e.target.name] = e.target.value;
        this.setState(value);
    }

    handleSubmit(e){

        e.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
                <input type="text" value={this.state.lastName} onChange={this.handleChange} name="lastName"/>
                <input type="text" value={this.state.birthdate} onChange={this.handleChange} name="birthdate"/>
                <input type="text" value={this.state.phoneNumber} onChange={this.handleChange} name="phoneNumber"/>
                <button type="submit">Validar</button>
                <div>
                    Ouput:<br/>
                    {'Full Name: ' + this.state.name + ' ' + this.state.lastName + ' | Birthdate: ' + this.state.birthdate + ' | Phone Number: ' + this.state.phoneNumber}
                </div>
            </form>
        );
    }
} 