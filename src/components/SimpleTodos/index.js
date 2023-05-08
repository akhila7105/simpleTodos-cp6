import {Component} from 'react'
import TodoItem from '../TodoItem/index'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {
    detailsList: initialTodosList,
  }

  deleteItem = id => {
    const {detailsList} = this.state
    const filteredList = detailsList.filter(item => item.id !== id)

    this.setState({detailsList: filteredList})
  }

  render() {
    const {detailsList} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="unordered-item">
            {detailsList.map(item => (
              <TodoItem
                item={item}
                deleteItem={this.deleteItem}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
