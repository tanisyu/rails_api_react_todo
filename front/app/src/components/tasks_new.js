import React, { Component } from 'react';

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { TextField, Fab } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';

import { postTask } from '../actions'

class TasksNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return (
      <div>
        <TextField {...input} placeholder={label} type={type} fullWidth={true} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values) {
    await this.props.postTask(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props

    const style = {
      back: {
        position: "fixed",
        left: 12,
        bottom: 12,
        background: "indigo",
        color: "white"
      },
      create: {
        position: "fixed",
        right: 12,
        bottom: 12,
        background: "green",
        color: "white"
      }
    }

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" type="text" component={this.renderField} />
          <Field label="Detail" name="detail" type="text" component={this.renderField} />

          <div>
            <Link to="/tasks">
              <Fab style={style.back} >
                <ArrowBackIcon />
              </Fab>
            </Link>
            <Fab disabled={pristine || submitting || invalid} style={style.create} type="submit">
              <SendIcon />
            </Fab>
          </div>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please"
  if (!values.detail) errors.detail = "Enter a detail, please"

  return errors
}

const mapDispatchToProps = ({ postTask })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'taskNewForm' })(TasksNew)
)
