import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from "redux-devtools-extension";

import TasksIndex from './components/tasks_index'
import TasksNew from './components/tasks_new'
import TasksShow from './components/tasks_show'
import TasksEdit from './components/tasks_edit'

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TasksIndex} />
          <Route exact path="/tasks" component={TasksIndex} />
          <Route path="/tasks/new" component={TasksNew} />
          <Route exact path="/tasks/:id" component={TasksShow} />
          <Route exact path="/tasks/:id/edit" component={TasksEdit} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
