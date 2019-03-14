import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
 
const TodoTable = (props) => {
  const columns = [{
    Header: 'Description',
    accessor: 'description'
  },{
    Header: 'Date',
    accessor: 'date',
    sortable: false
  }, {
    Header: '',
    accessor: 'date',
    sortable: false,
    filterable: false,
    Cell: row => <button onClick={() => props.deleteItem(row)}>Delete</button>
  }]
 
  return (
    <div>
      <ReactTable data={props.todos} defaultPageSize={8} columns={columns} filterable={true}/>
    </div>
  );
}
 
export default TodoTable;