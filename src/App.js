import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Login from './Login';
import Test from './parent/fils/test';
import {store} from './store'
import {Provider} from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
    <Profile/>
    <Login/>
    <Test/>
    </Provider>
    </div>);
  
}

export default App;
