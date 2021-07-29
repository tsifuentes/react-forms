import React from "react";
import './ControlledForm.css';

export default class ControlledForm extends React.Component {
    
    onChange(event){
        event.preventDefault();
    }

    render (){
        return (
            <form>

                <h3>Showing controlled form elements</h3>
                <label>
                    <div>ID (No Editable Value):</div>
                    <input type="text" value="45608569" onChange={this.onChange} />
                </label>
                <label>
                    <div>Passport ID (No Editable Value empty):</div>
                    <input type="text" value="" onChange={this.onChange}/>
                </label>
                <label>
                    <div>Name (editable null):</div>
                    <input type="text" onChange={this.onChange}/>
                </label>
                <label>
                    <div>Last Name (editable undefined):</div>
                    <input type="text" value={undefined} onChange={this.onChange}/>
                </label>
                <label>
                    <div>Bio (editable - no value):</div>
                    <textarea value={undefined} onChange={this.onChange}/>
                </label>
                <label>
                    <div>Occupation (autoselected no editable):</div>
                    <select value="engineer" onChange={this.onChange}>
                        <option value="engineer">Engineer</option>
                        <option value="doctor">Doctor</option>
                        <option value="homemade">Homemade</option>
                        <option value="nurse">Nurse</option>
                        <option value="driver">Driver</option>
                        <option value="designer">Designer</option>
                    </select>
                </label>
                <label>
                    <div>Hobbies (multiple selected no editable with default value):</div>
                    <select multiple={true} value={['guitar', 'readbooks']} onChange={this.onChange}>
                        <option value="guitar">Play Guitar</option>
                        <option value="boxing">Boxing</option>
                        <option value="readbooks">Read books</option>
                        <option value="origami">Origami</option>
                        <option value="cooking">Cooking</option>
                        <option value="drawing">Drawing</option>
                    </select>
                </label>

                <div>Favorite colors:</div>
                <label>
                    <input type="checkbox" onChange={this.onChange}/> Green
                </label>
                <label>
                    <input type="checkbox" onChange={this.onChange}/> Yellow
                </label>
                <label>
                    <input type="checkbox" onChange={this.onChange}/> Blue
                </label>
                <label>
                    <input type="checkbox" onChange={this.onChange}/> Red
                </label>

                <div>Role:</div>
                <label>
                    <input type="radio" name="role" onChange={this.onChange}/>Admin
                </label>
                <label>
                    <input type="radio" name="role" onChange={this.onChange}/>Developer
                </label>
                <label>
                    <input type="radio" name="role" onChange={this.onChange}/>Guest
                </label>
            </form>
        );
    } 
}