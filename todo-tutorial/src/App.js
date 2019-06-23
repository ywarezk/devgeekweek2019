import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloFunction from './components/HelloFunction';
import HelloClass from './components/HelloClass';
import TodoList from './components/TodoList';
import Login from './components/Login';
import LoginFormik from './components/LoginFormik';
import {Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import Error404 from './components/Error404';

function App() {
  return (
    <div className="App">
      {/* <HelloFunction message="hello from yariv" />  

      <HelloClass msg="hello from devgeekweek" someObject={ {
        hello: 'world',
        foo: 'bar'
      } } /> */}

      {/* <TodoList /> */}

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={LoginFormik} />
        <Route path="/dashboard/:email/:password" component={Dashboard} />
        <Route component={Error404} />
      </Switch>
      

      {/* <div className="container">
        <div className="row">
          <div className="col-4">
            <Login />

            
          </div>
        </div>
      </div> */}
      
    </div>
    
  );
}

export default App;
