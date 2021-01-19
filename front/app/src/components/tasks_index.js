import React, { Component } from 'react';

import { connect } from 'react-redux'
import { readTasks } from '../actions'
import { Link } from 'react-router-dom'

class TasksIndex extends Component {
  componentDidMount() {
    this.props.readTasks()
  }

  renderTasks() {
    if (typeof this.props.tasks.data === 'undefined') {
      return null
    }
      
    return (<tbody>
      {
        this.props.tasks.data.map((task) => {
          return (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.detail}</td>
              <td>{task.is_done}</td>
              <td>{task.done_at}</td>
            </tr>
          )
        })
      }
    </tbody>)
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Detail</th>
              <th>Is_done</th>
              <th>Done_at</th>
            </tr>
          </thead>

          {this.renderTasks()}
        </table>

        <Link to="/tasks/new">New Event</Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ tasks: state.tasks })

const mapDispatchToProps = ({ readTasks })

export default connect(mapStateToProps, mapDispatchToProps)(TasksIndex)
