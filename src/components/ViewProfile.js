import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

class ViewProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      human{}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/human/')
      .then(res => {
        this.setState({ human: res.data });
        console.log(this.state.human);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Someone's profile
            </h3>
          </div>
          	<h1>{h.name}</h1>
          	<h2>{h.lastName}</h2>
        </div>
      </div>
    );
  }
}

export default ViewProfile;

