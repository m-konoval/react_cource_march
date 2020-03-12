import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import {render} from 'react-dom';

const dataSource = [
  {firstName: "John", lastName: "Doe", active: false},
  {firstName: "Mary", lastName: "Moe", active: false},
  {firstName: "Peter", lastName: "Noname", active: true}
];

class GridRecord extends React.Component {
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

class GridComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      records: []
    }
  }

  componentDidMount() {
    this.setState({
      records: dataSource
    })
  }

  toggleCheckbox(index) {
    let {records} = this.state;
    records[index].active = !records[index].active;
    this.setState({
      records: records
    })
  };

  render() {
    return (
      <div className="container pt-4 pb-4 w-50 ml-auto mr-auto">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Filter by ..."/>
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
      </div>
    )
  }
}

render(
  <GridComponent/>,
  document.getElementById('app')
);
