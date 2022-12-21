import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class App extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const { email, password } = this.state;
        
        axios.get('http://localhost:5126/useritems/'+ this.props.match.params.id+ '/', { email, password })
        .then((result) => {
            
            this.props.history.get("/show/"+this.props.match.params.id)
        });
    }

    render() {
        const { email, password } = this.state;
        return (
	    
        <main>
            <h3><Link to="/register">Register</Link></h3>

            <form onSubmit={this.onSubmit}>
            <div>
            {/*<label for="1">Email: </label>*/}
            <input required type="email" name="email" value={email} onChange={this.onChange} placeholder="Email" id="1"></input>
            </div>
            <div>
            {/*<label for="2">Password: </label>*/}
            <input minLength="8" required type="password" name="password" value={password} onChange={this.onChange} placeholder="Password" id="2"></input>
            </div>
            <Button variant="primary" type="submit">Done</Button>
            </form>
        </main>
        );
        
    }
}

export default App;
