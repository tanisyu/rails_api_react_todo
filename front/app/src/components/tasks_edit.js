import React, { Component } from 'react';

import { connect } from 'react-redux'
import { getTask, putTask, deleteTask } from '../actions'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

class TasksEdit extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount() {
    this.props.getTask(this.props.match.params.id)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values) {
    await this.props.putTask(values)
    this.props.history.push('/')
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteTask(id)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
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
            <tbody>
              <tr>
                <td>
                  ID
                </td>
                <td>
                  <Field label="Title" name="title" type="text" component={this.renderField} />
                </td>
                <td>
                  <Field label="Detail" name="detail" type="text" component={this.renderField} />
                </td>
                <td>
                  <Field label="Is_done" name="is_done" type="checkbox" component={this.renderField} />
                </td>
                <td>
                  Done_at
                </td>
              </tr>
            </tbody>
          </table>

          <div>
            <Link to={`/tasks/${this.props.match.params.id}`}>Back</Link>
            <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const task = state.tasks[ownProps.match.params.id]
  return { initialValues: task, state }
}

const mapDispatchToProps = ({ getTask, putTask, deleteTask })

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ form: 'taskEditForm', enableReinitialize: true})
  (TasksEdit)
)
