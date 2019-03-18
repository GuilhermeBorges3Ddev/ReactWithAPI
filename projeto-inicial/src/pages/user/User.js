import React, { Component } from 'react'

class User extends Component {
  render() {
      let list = [
          {
              name: "Adon",
              email: "adon.beta@gmail.com"
          },
          {
            name: "Jane",
            email: "jane.mariel@gmail.com"
          }
      ]
    return (
      <div className="d-flex justify-content-center">
        <br />
        <table border="1">
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            {list.map((item) => {
                return <tr>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.email}
                    </td>
                </tr>
            })}
        </table>
      </div>
    );
  }
}

export default User;
