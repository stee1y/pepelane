import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { fetchVehicles } from '../../store/actions/vehicles'
import vehicles from '../../vehicles.json'

// import VehicleItem from '../VehicleItem/VehicleItem'
import classes from './VehicleList.module.css'

const VehicleList = (props) => {

  // const isItEmptyArr = !!props.vehiclesList.vehicles.length
  // useEffect(() => {
  //   if (!isItEmptyArr) {
  //     props.fetchVehicles()
  //   }
  // }, [])
  
  function vehiclesReander() {

    return vehicles.map((item, i)=> {

      //"airship", "rocket", "helicopter", "plane"
      
      return (
        <li key={Math.random()} className={classes.VehicleItem} data-id={item.id} onClick={() => props.history.push(`/${item.type.toLowerCase()}/${item.name.toLowerCase()}/${item.id}`)}>
          <img className={classes.img} src={item.image} alt={item.type} />
          <div className={classes.grup_text}>
            <h4 className={classes.title}>{item.name}</h4>
            <div className={classes.description} >{item.description}</div>
            <strong className={classes.price} >{item.rent} $/h</strong>
          </div>
        </li>
      )
    })
  }

  return (
    <ul className={classes.VehicleList}>
      {props.loading && props.vehiclesList !== 0
        ? <h1>LOAIND...</h1>
        : vehiclesReander()
          }
    </ul>
  )
}

function mapStateToProps(state) {
  return {
    // vehiclesList: state.vehiclesList,
    // loading: state.vehiclesList.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchVehicles: () => dispatch(fetchVehicles())
  }
}

export default compose(connect(mapStateToProps, {fetchVehicles}), withRouter)(VehicleList)