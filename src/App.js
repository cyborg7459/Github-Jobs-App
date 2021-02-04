import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header-component';
import Homepage from './pages/homepage/homepage';

class App extends React.Component {
  render() {
    return (
      <div className='main'>
        <Header />
        <Switch>
          <Route path="/" exact component={ Homepage }/>
        </Switch>
      </div>
    )
  }
}

export default App;
