import React from 'react';
import Leaderboard from './Leaderboard';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      reverse: true,
      ranking: 'recent'
    };
  }

  getData() {
    $.ajax({
      url: this.props.api + this.state.ranking,
      dataType: 'json',
      cache: false,
      success: function(data) {
        var users = data;
        this.setState({users: users});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.api, status, err.toString());
      }.bind(this)
    });
    /*
    $.getJSON(this.state.api, function(data) {
      var users = data;
      this.setState({users: users});
    }.bind(this));
    */
  }

  // componentDidMount can be used for sending AJAX requests, integrating with other JavaScript frameworks, or setting timers using setTimeout or setInterval
  componentDidMount() {
    this.getData();
  }

  sortTable(ranking) {
    if (ranking !== this.state.ranking) {
      this.setState({reverse: true, ranking: ranking}, this.getData);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div id="header">
              <h3>Leaderboard</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
              <Leaderboard
                id="leaderboard"
                users={this.state.users}
                api={this.props.api}
                updatePage={this.getData.bind(this)}
                sortTable={this.sortTable.bind(this)}
                />
           </div>
        </div>
      </div>
    );
  }
}

export default App;
