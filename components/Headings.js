import React from 'react';

class Headings extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>User Name</th>
          <th className="to-sort sorted true" onClick={this.handleSorting.bind(this, 'recent')}>Points recently</th>
          <th className="to-sort" onClick={this.handleSorting.bind(this, 'alltime')}>Points all time</th>
        </tr>
      </thead>
    );
  }

  handleSorting(heading, event) {
    if (!event.target.classList.contains('sorted')) {
      var headingsList = document.getElementsByClassName('to-sort');
      for (var i = 0; i < headingsList.length; i++) {
        headingsList[i].className = 'to-sort';
        console.log('Re-sorted!');
      }
      event.target.className = 'to-sort sorted true';
      console.log(heading);
      this.props.sortTable(heading);
    }
  }
}

export default Headings;
