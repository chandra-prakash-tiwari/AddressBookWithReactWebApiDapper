import React, { Component } from 'react';
import AllContactsDisplay from './components/AllContactsDisplay';
import Form from './components/Form';
import ContactDetails from './components/ContactDetails';
import { Route, Switch} from 'react-router-dom';

export default class contents extends Component {
    render() {
        return (
          <div className="content">
            <Switch>
              <Route exact path="/">
                <AllContactsDisplay />
              </Route>
              <Route exact path='/add'>
                <AllContactsDisplay />
                <Form/>
              </Route>
              <Route path='/contactdisplay/'>
                <AllContactsDisplay />
                <ContactDetails value={(window.location.pathname).split('/contactdisplay/')[1]}/>
              </Route>
              <Route path='/edit'>
                <AllContactsDisplay />
                <Form />
              </Route>
            </Switch>
          </div>
        )
    }
}
