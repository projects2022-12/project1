import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

class AllPorfiles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      humans: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/profiles')
      .then(res => {
        this.setState({ humans: res.data });
        console.log(this.state.humans);
      });
  }

  render() {
    return (
    <Router>
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Profiles of humans
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/Create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Invoice</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.humans.map(h =>
                  <tr key={h.id}>
                    <td><Link to={`/human/${h.id}`}>{h.name}</Link></td>
                    <td>{h.lastName}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Router>
    );
  }
}

export default AllProfiles;
