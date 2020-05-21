import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Main from './views/Main/index';

// PrivateRoute를 사용하고 싶은 경우 사용합니다.
// const Auth = {
//   isAuthenticated: true ? true : false
// }

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     Auth.isAuthenticated === true
//       ? <Component {...props} />
//       : window.location.href = "http://tour.interpark.com/"
//   )} />
// )

class App extends Component {
  render() {

    let { location } = this.props;

    return (      
      <Switch location={location}>
        <Route exact path="/" component={Main}/>
      </Switch>
    );
  }
}

export default withRouter(App);
