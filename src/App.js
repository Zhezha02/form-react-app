import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpForm from './pages/SignUpPage';

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/login']}>
          <SignInPage />
        </Route>
        <Route path='/sign-up'>
          <SignUpForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
