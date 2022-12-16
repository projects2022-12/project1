import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    }
    
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { email, password, passwordConfirmation } = this.state;
        
        if (password === passwordConfirmation && password) {
        axios.post('http://localhost:5000/api/register/', { email, password })
        .then((result) => {
            
            this.props.history.push("/");
            } 
        );
        } else {
        	alert('Please enter the same password both times');
        }
    }

    render() {
        const { email, password, passwordConfirmation } = this.state;
        return (
        <main>
            <h3><Link to="/">Main Page</Link></h3>

            <form onSubmit={this.onSubmit}>
            <div>
            <input required type="email" name="email" value={email} onChange={this.onChange} placeholder="Email"></input>
            </div>
            <div>
            <input minLength="8" required type="password" name="password" value={password} onChange={this.onChange} placeholder="Password"></input>
            </div>
            <div>
            <input minLength="8" required type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={this.onChange} placeholder="Password Confirmation"></input>
            </div>
            <button type="submit">Done</button>
            </form>
        </main>
        );
        
    }
}

export default Register;
