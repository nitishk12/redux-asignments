import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import Assignments from './Assignments'
import DisplayCount from './components/DisplayCount';
import GetRandom from './components/GetRandom';
import AddNumber from './components/AddNumber';
import ShowTasks from './components/ShowTasks'
import ProductList from './components/ProductList'
import UsersList from './components/UsersList'
import UserShow from './components/UserShow'
import UserIdForm from './components/UserIdForm'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>Playarea</h2>
        <Link style={{ paddingLeft: 10 }} to='/'>Home</Link>
        <Link style={{ paddingLeft: 10 }} to='/assignments'>Assignments</Link>

        <Route path='/assignments' component={Assignments} exact={true} />
        <Route path='/assignments/display-count' component={DisplayCount} />
        <Route path='/assignments/display-random' component={GetRandom} />
        <Route path='/assignments/show-number' component={AddNumber} />
        <Route path='/assignments/show-task' component={ShowTasks} />
        <Route path='/assignments/show-product' component={ProductList} />
        <Route path='/assignments/show-user' component={UsersList} exact={true} />
        <Route path='/assignments/show-user/:id' component={UserShow} />
        <Route path='/assignments/show-user-id' component={UserIdForm} />
      </div>
    </BrowserRouter>
  );
}

export default App;
