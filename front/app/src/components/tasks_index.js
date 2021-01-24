import React, { Component } from 'react';

import { connect } from 'react-redux'
import { readTasks } from '../actions'
import { Link } from 'react-router-dom'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Fab,
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

class TasksIndex extends Component {
  componentDidMount() {
    this.props.readTasks()
  }

  renderTasks() {
    if (typeof this.props.tasks.data === 'undefined') {
      return null
    }
      
    return (<TableBody>
      {
        this.props.tasks.data.map((task) => {
          return (
            <TableRow key={task.id}>
              <TableCell>{task.id}</TableCell>
              <TableCell>
                <Link to={`/tasks/${task.id}`}>
                  {task.title}
                </Link>
              </TableCell>
              <TableCell>{task.detail}</TableCell>
              <TableCell>{task.is_done}</TableCell>
              <TableCell>{task.done_at}</TableCell>
            </TableRow>
          )
        })
      }
    </TableBody>)
  }

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
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

          {this.renderTasks()}
        </Table>

        <Link to="/tasks/new">
          <Fab color="primary" style={style} >
            <AddIcon />
          </Fab>
        </Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ tasks: state.tasks })

const mapDispatchToProps = ({ readTasks })

export default connect(mapStateToProps, mapDispatchToProps)(TasksIndex)
