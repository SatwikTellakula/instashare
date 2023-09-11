import './App.css'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
