import React, { Component } from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import TodoTable from './TodoTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', date: '', todos: []}
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  addTodo = (event) => {
    event.preventDefault();
    const newTodo =  {description: this.state.description, date: this.state.date};
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  
  deleteItem = (row) => {
    this.setState ({
      todos: this.state.todos.filter ((todo, i) => i !== row.index)
    })
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" >
            todo list
          </Typography>
          
        </Toolbar>
      </AppBar>
        <div style={{marginTop: 20, marginBottom: 20}}>
          <form onSubmit={this.addTodo}>
            Description:<br/>
            <TextField type="text" label="description" name="description" onChange={this.inputChanged} value={this.state.description}/><br/>
             Date:<br/>
            <TextField  type="date" label="date" InputLabelProps={{shrink: true,}} name="date" onChange={this.inputChanged} value={this.state.date}/>
           
            <Button size='small' variant="contained" color='primary' onClick={this.addTodo} >
            <SaveIcon />Save</Button>

          </form>
        </div>
        <div>
        <TodoTable todos={this.state.todos} deleteItem={this.deleteItem}/>         
        </div> 

      </div>    
    );
  }
}

export default App;