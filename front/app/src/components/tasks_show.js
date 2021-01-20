import React, { Component } from 'react';

import { connect } from 'react-redux'
import { getTask } from '../actions'
import { Link } from 'react-router-dom'

class TasksShow extends Component {
  componentDidMount() {
    this.props.getTask(this.props.match.params.id)
  }

  renderTask() {
    const task = this.props.task

    if (typeof task === 'undefined') {
      return null
    }

    return (
      <tbody>
        <tr key={task.id}>
          <td>{task.id}</td>
          <td>{task.title}</td>
          <td>{task.detail}</td>
          <td>{task.is_done}</td>
          <td>{task.done_at}</td>
        </tr> 
      </tbody>
    )
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
          {this.renderTask()}
        </table>

        <Link to="/tasks">Back</Link>
        <Link to={`/tasks/${this.props.match.params.id}/edit`}>Edit</Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ task: state.tasks[ownProps.match.params.id] })

const mapDispatchToProps = ({ getTask })

export default connect(mapStateToProps, mapDispatchToProps)(TasksShow)
