import React, { Component } from 'react';

import { connect } from 'react-redux'
import { getTask } from '../actions'
import { Link } from 'react-router-dom'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Fab,
} from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';

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
      <TableBody>
        <TableRow key={task.id}>
          <TableCell>{task.id}</TableCell>
          <TableCell>{task.title}</TableCell>
          <TableCell>{task.detail}</TableCell>
          <TableCell>{task.is_done}</TableCell>
          <TableCell>{task.done_at}</TableCell>
        </TableRow> 
      </TableBody>
    )
  }

  render() {
    const style = {
      back: {
        position: "fixed",
        left: 12,
        bottom: 12,
        background: "indigo",
        color: "white"
      },
      edit: {
        position: "fixed",
        right: 12,
        bottom: 12,
        background: "green",
        color: "white"
      }
    }

    return (
      <React.Fragment>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Detail</TableCell>
              <TableCell>Is_done</TableCell>
              <TableCell>Done_at</TableCell>
            </TableRow>
          </TableHead>
          {this.renderTask()}
        </Table>

        <Link to="/tasks">
          <Fab style={style.back} >
            <ArrowBackIcon />
          </Fab>
        </Link>
        <Link to={`/tasks/${this.props.match.params.id}/edit`}>
          <Fab style={style.edit} >
            <EditIcon />
          </Fab>
        </Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ task: state.tasks[ownProps.match.params.id] })

const mapDispatchToProps = ({ getTask })

export default connect(mapStateToProps, mapDispatchToProps)(TasksShow)
