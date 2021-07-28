import React from "react";
import './ControlledForm.css';

export default class ControlledForm extends React.Component {
    render (){
        return (
            <form>

                <h3>Showing controlled form elements</h3>
                <label>
                    <div>ID (No Editable Value):</div>
                    <input type="text" value="45608569"/>
                </label>
                <label>
                    <div>Passport ID (No Editable Value empty):</div>
                    <input type="text" value=""/>
                </label>
                <label>
                    <div>Name (editable null):</div>
                    <input type="text" value={null}/>
                </label>
                <label>
                    <div>Last Name (editable undefined):</div>
                    <input type="text" value={undefined}/>
                </label>
                <label>
                    <div>Bio (editable - no value):</div>
                    <textarea/>
                </label>
                <label>
                    <div>Occupation (autoselected no editable):</div>
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
                    <div>Hobbies (multiple selected no editable with default value):</div>
                    <select multiple={true} value={['guitar', 'readbooks']}>
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
                    <input type="checkbox"/> Green
                </label>
                <label>
                    <input type="checkbox"/> Yellow
                </label>
                <label>
                    <input type="checkbox"/> Blue
                </label>
                <label>
                    <input type="checkbox"/> Red
                </label>

                <div>Role:</div>
                <label>
                    <input type="radio" name="role"/>Admin
                </label>
                <label>
                    <input type="radio" name="role"/>Developer
                </label>
                <label>
                    <input type="radio" name="role"/>Guest
                </label>
            </form>
        );
    } 
}