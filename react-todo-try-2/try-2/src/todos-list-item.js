import React from 'react';

export default class TodosListItem extends React.Component {
  render () {
    return (
        <tr>
          <td>{this.props.task}</td>
        </tr>
    )
  }
};
