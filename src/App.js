import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom';

//Path Components
const Home = () => <h1> I am home </h1>;
const Contact = () => <h1> I am contact </h1>;
const Me = () => <h1> I am me </h1>;
const Hi = () => <h1> I am hi, how are you </h1>;
const NotFound = () => <h1>Whoops. You broke the internet again.</h1>;
const NavBar = () => (
  <div>
    <NavLink to="/" exact activeClassName="selected">
      Home
    </NavLink>
    <NavLink to="/contact" activeClassName="selected">
      Contact
    </NavLink>
  </div>
);
const Posts = ({ match }) => (
  <div>
    <h1>Blog</h1>
    <Route
      path={`${match.url}/hello-world`}
      render={({ match }) => <h2>Hello, World!</h2>}
    />
    <Route
      path={`${match.url}/scram-world`}
      render={({ match }) => <h2>Scram, World!</h2>}
    />
  </div>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/me" component={Me} />
            <Route path="/hi" component={Hi} />
            <Route path="/posts" component={Posts} />
            <Redirect from="/old" to="/contact" />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
