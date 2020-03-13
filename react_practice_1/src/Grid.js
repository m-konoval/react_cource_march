import React from 'react';
import PropTypes from 'prop-types';

export class GridRecord extends React.Component {
  render() {
    let {record, onCheck} = this.props;

    return (
      <tr>
        <td>{record.firstName}</td>
        <td>{record.lastName}</td>
        <td>
              <span className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={record.active}
                  onChange={onCheck}
                />
              </span>
        </td>
      </tr>
    )
  }
}
GridRecord.defaultProps = {
  record: {firstName: "N/A", lastName: "N/A", active: false}
};
GridRecord.propTypes = {
  record: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
  })
};


export class GridComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      records: []
    }
  }

  componentDidMount() {
    this.refs.filterInput && this.refs.filterInput.focus();
    this.setState({
      records: this.props.data
    });
  }

  toggleCheckbox(index) {
    let {records} = this.state;
    records[index].active = !records[index].active;
    this.setState({
      records: records
    })
  };

  handleFilterChange(e) {
    let value = e.target.value,
      records = data.filter((record) =>
        record.firstName.toUpperCase().includes(value.toUpperCase()));
    this.setState({
      records: records
    });
  }

  render() {
    return (
      <div className="container pt-4 pb-4 w-50 ml-auto mr-auto">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by ..."
            ref="filterInput"
            onChange={this.handleFilterChange.bind(this)}
          />
        </div>

        <table className="table table-condensed">
          <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.records.map((record, idx) => (
              <GridRecord key={idx} record={record} onCheck={() => this.toggleCheckbox(idx)}/>
            ))
          }
          </tbody>
        </table>
        <div>
          {
            this.props.children && this.props.children.map(child => {
              return React.cloneElement(child, {records: this.state.records})
            })
          }
        </div>
      </div>
    )
  }
}