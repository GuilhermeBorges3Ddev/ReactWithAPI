import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        <div>
          Name: {this.props.name}
        </div>
        <span>Photo:</span>
        <div className="pt-2 mb-3"> 
          <img src={this.props.photo} alt="state-vs-props"/> 
        </div>
      </div>
    );
  }
}

export default User;