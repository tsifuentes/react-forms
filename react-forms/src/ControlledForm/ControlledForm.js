import React from "react";
import './ControlledForm.css';

export default class ControlledForm extends React.Component {
    render (){
        return (
            <form>

                <h3>Showing controlled form elements</h3>
                <label>
                    <div>Name:</div>
                    <input type="text" value="Thomas"/>
                </label>
                <label>
                    <div>Last Name:</div>
                    <input type="text" value="Sifuentes"/>
                </label>
                <label>
                    <div>Bio:</div>
                    <textarea value="I am a Systems Engineer who loves Web Technologies..."/>
                </label>
                <label>
                    <div>Occupation:</div>
                    <select value="engineer">
                        <option value="engineer">Engineer</option>
                        <option value="doctor">Doctor</option>
                        <option value="homemade">Homemade</option>
                        <option value="nurse">Nurse</option>
                        <option value="driver">Driver</option>
                        <option value="designer">Designer</option>
                    </select>
                </label>
                <label>
                    <div>Hobbies:</div>
                    <select multiple={true} value={['guitar', 'readbooks']}>
                        <option value="guitar">Play Guitar</option>
                        <option value="boxing">Boxing</option>
                        <option value="readbooks">Read books</option>
                        <option value="origami">Origami</option>
                        <option value="cooking">Cooking</option>
                        <option value="drawing">Drawing</option>
                    </select>
                </label>
            </form>
        );
    } 
}