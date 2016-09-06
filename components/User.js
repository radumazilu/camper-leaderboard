import React from 'react';

class User extends React.Component {

  render() {
    return (
      <tr>
        <td>{this.props.count}</td>
        <td>
          <a href={"https://www.freecodecamp.com/"+this.props.user.username} target="_blank">
            <img
              width="50"
              height="50"
              src={this.props.user.img} className="user-img"/>
            <p>{this.props.user.username}</p>
          </a>
        </td>
        <td className="numbercol">{this.props.user.recent}</td>
        <td className="numbercol">{this.props.user.alltime}</td>
      </tr>
    );
  }

}

export default User;
