
import './App.css';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { Provider } from 'react-redux';
import store from './Store';
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Provider store={store}>
        <Router>
          <Switch>            
            <Route path="/addUser" exact component={UserForm} />
            <Route path="/UserList" exact component={UserList}/>
            <Route path="/edit/:id" component={UserForm}/>

          </Switch>
        </Router>
        
      </Provider>
    </>
  );
}

export default App;
