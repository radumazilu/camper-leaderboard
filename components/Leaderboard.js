import React from 'react';
import User from './User';
import Headings from './Headings'

class Leaderboard extends React.Component {

  render() {
    var count = 0;
    var userlist = this.props.users.map(function(user) {
      count++;
      return (
        <User user={user} key={user.username} count={count} api={this.props.api} updatePage={this.props.updatePage}/>
      );
    }.bind(this));

    return (
      <table className="table">
        <Headings sortTable={this.props.sortTable}/>
        <tbody>
          {userlist}
        </tbody>
      </table>
    );
  }

}

export default Leaderboard;
