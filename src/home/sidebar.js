import React from 'react'

import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Home from './home';
import CharacterIndex from '../character/CharacterIndex';
import FactionIndex from '../faction/FactionIndex';
import Splash from './splash';

const Sidebar = (props) => (

    <div className="sidebar"> 
        <div className="sidebar-list list-unstyled">
            <ul className="sidebar-list list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/character">Character</Link></li>
                <li><Link to="/faction">Faction</Link></li>
            </ul>
        </div>
        <div className="sidebar-route">
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/character"><CharacterIndex token={props.token} /></Route>
                <Route exact path="/faction"><FactionIndex token={props.token} /></Route>
            </Switch>
        </div>
    </div>

)

export default Sidebar;