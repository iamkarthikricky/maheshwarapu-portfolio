import {Switch,Route} from 'react-router-dom'
import {Component} from 'react'

import Home from '../src/components/Home/index'
import About from './components/AboutTheDeveloper'
import Projects from './components/Projects'


class App extends Component{

  render(){
    return(
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about-the-developer' component={About} />
        <Route path='/projects' component={Projects}/>
      </Switch>    
    )
  }
}

export default App