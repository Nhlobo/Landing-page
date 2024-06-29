import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import JobList from './components/JobList';
import Reward from './components/Reward';
import Navbar from './components/Navbar';

function App() {
    return (
        <div>
            <Navbar />
            <main>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/profile" component={Profile} />
                    <Route path="/jobs" component={JobList} />
                    <Route path="/rewards" component={Reward} />
                </Switch>
            </main>
        </div>
    );
}

export default App;
