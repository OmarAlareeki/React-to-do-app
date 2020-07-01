import React from 'react'
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class AppList extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData           // coming from todoData.js id, text, completion.
          //prop : data of prop
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {            // Hnadle the change based on what... is id as a prop from the data in tododata.js
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {  // the main goal here if the item is compelete or !]
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo         // return todo in map                                                          ]
            })
            return {
                todos: updatedTodos      // todos = updatedTodos logic, updatedTodos is data with logic
              //prop : data of prop      // now we have a todos with logic in the handle change
                                         //return todos as updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return (
                <div className="todo-list">  { /* printing the whole list in todosData with the logic */}
                    {todoItems}
                </div>
        )

    }
}

export default AppList
