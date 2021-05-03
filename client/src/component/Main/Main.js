import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import VehicleList from '../VehicleList/VehicleList'
import classes from './Main.module.css'

const Main = (props) => {

  console.log(props)

  return (
    <div>
    {!props
      ? <h1>aaa</h1>
      : <main className={classes.main}>
          <div className={classes.control_grup}>
            <h2 className={classes.title}>Rent {'4545'}</h2>
            <Link to='/' className={classes.add_item}>Add new <div className={classes.new_item_box}></div></Link>
          </div>
          <VehicleList/>
        </main>}
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

export default compose(connect(mapStateToProps, {}),withRouter)(Main)