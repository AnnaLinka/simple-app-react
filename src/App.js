import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import axios from 'axios';

class App extends React.Component{

  state = {
    todos: [
      {
        id: 1,
        title: "Call Adam",
        completed: false
      },
      {
        id: 2,
        title: "Go shopping",
        completed: false
      },
      {
        id: 3,
        title: "Learn React",
        completed: false
      },
    ]
  }

  //faking connection with server using axios and json placeholder
  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
  //   .then(response => this.setState({todos: response.data}))
  // }

  markedCompleteFn = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo;
        })
    });
  }

  removeItemFn = (id) => {
    // without backend connection
    this.setState({
      todos: [...this.state.todos].filter(todo => todo.id !== id)
    });

    //faking connection with server using axios and json placeholder
    // axios.delete(`'https://jsonplaceholder.typicode.com/todos/${id}`)
    //   .then(response => this.setState({
    //     todos: [...this.state.todos.filter(todo => todo.id !== id)]
    // }))
  }

  addItemFn = (title) => {
    // without backend connection
    const newTodo = {
      title,
      id: Math.random(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })

    //faking connection with server using axios and json placeholder
    // axios.post('https://jsonplaceholder.typicode.com/todos', 
    //   { title, 
    //     id: Math.random(),
    //     completed: false
    // })
    //   .then(response => this.setState({
    //   todos: [...this.state.todos, response.data]
    // }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <>
                <AddTodo addItem={this.addItemFn}/>
                <Todos 
                  todos={this.state.todos} 
                  markCompleteFn={this.markedCompleteFn} 
                  removeItem={this.removeItemFn}
                />
              </>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  } 
}

export default App;
