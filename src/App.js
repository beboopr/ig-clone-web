import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './scenes/Home'
import Login from './scenes/Login'
import Header from './component/Header';
import Feed from './component/Feed';
import './App.css';

function App() {
  const [user, setUser] = useState(null)
  return (
    <Router>
      <Header />
      <div className="App-header"></div>
      <Feed/>
      <NavBar />
      <Switch>
        <Route path="/login"><Login setUser={setUser} /></Route>
        <Route exact path="/"><Home user={user} /></Route>
      </Switch>
    </Router>
  )
}


export default App;
