import React from 'react'
import { Switch, Route, Router, Redirect } from 'react-router-dom'

import HomePage from './pages/home'
import NewPostPage from './pages/new-post'
import ProfilePage from './pages/profile'

import AppMenu from './components/menu'

import history from './history'

import './styles/general.scss';

window.API_URL        = process.env['API_URL'];

function App() {
  return (
    <Router history={history}>        
        <AppMenu/>
        <div className="app-container">
            <Switch>
                <Route path="/new-post" component={NewPostPage}/>
                <Route path="/profile" component={ProfilePage}/>                
                <Route path="/" component={HomePage}/>
                <Route render={props => (<Redirect to={`/`} />)}/>
            </Switch>
        </div>
    </Router>
);
}

export default App;
