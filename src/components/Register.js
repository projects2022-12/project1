import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
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
        const { userName, email, password, passwordConfirmation } = this.state;
        
        if (password === passwordConfirmation) {
        axios.post('http://localhost:5126/useritems', { userName, email, password })
        .then((result) => {
            
            } 
        );
        } else {
        	alert('Please enter the same password both times');
        }
    }

    render() {
        const { userName, email, password, passwordConfirmation } = this.state;
        return (
        <main>
            <h3><Link to="/">Main Page</Link></h3>

            <form onSubmit={this.onSubmit}>
            <div>
            <input required type="text" name="userName" value={userName} onChange={this.onChange} placeholder="Username"></input>
            </div>
            <div>
            <input required type="email" name="email" value={email} onChange={this.onChange} placeholder="Email"></input>
            </div>
            <div>
            <input minLength="8" required type="password" name="password" value={password} onChange={this.onChange} placeholder="Password"></input>
            </div>
            <div>
            <input minLength="8" required type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={this.onChange} placeholder="Password Confirmation"></input>
            </div>
            <Button variant="primary" type="submit">Done</Button>
            </form>
        </main>
        );
        
    }
}

export default Register;
