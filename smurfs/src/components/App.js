import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getSmurfs, addSmurf, deleteSmurf } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  addSmurf = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.props.addSmurf(newSmurf);
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  deleteSmurf = id => {
    this.props.deleteSmurf(id);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => {
          return (
            <div>
              <h3>{smurf.name}</h3>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
              <button onClick={() => this.deleteSmurf(smurf.id)}>X</button>
              </div>
          )
        })}
        <form onSubmit={this.addSmurf}>
          <input type="text" value={this.state.name} name="name" onChange={this.changeHandler} placeholder="name" />
          <input type="text" value={this.state.age} name="age" onChange={this.changeHandler} placeholder="age" />
          <input type="text" value={this.state.height} name="height" onChange={this.changeHandler} placeholder="height" />
          <button type="submit">Add a cool Smurf!</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  editMode: state.editMode
})

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf }
)(App);
