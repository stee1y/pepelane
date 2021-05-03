
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css'
import ErrorPage from './component/ErrorPage/ErrorPage'
import HeaderContainer from './component/Header/HeaderContainer'
import Main from './component/Main/Main'
import Vehicle from './component/Vehicle/Vehicle'
import Masseges from './component/Masseges/Masseges'
import Notification from './component/Notification/Notification'
import { connect } from 'react-redux'
import { compose } from 'redux'



function App(props) {

  return (
      <div className="container">
        <HeaderContainer/>
        <Switch>
          {/* <Route exact path='/' component={Main}/>
          <Route exact path='/:type' component={Main}/>
          <Route path='/:type/:name/:id' component={Vehicle}/>
          <Route path='/masseges' component={Masseges}/>
          <Route path='/notification' component={Notification}/> */}
          
          {/* <Route component={ErrorPage}/> */}
        </Switch>
      </div>
  )
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

// function mapDispatchToProps(dispatch) {
//   return {

//   }
// }

export default compose(connect(mapStateToProps, {}), withRouter)(App)
