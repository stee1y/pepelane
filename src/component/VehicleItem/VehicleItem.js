import React from 'react'
import classes from './VehicleItem.module.css'
import img from '../../image/one.jpg'

const VehicleItem = () => {

  

  return (
    <li className={classes.VehicleItem}>
      <img className={classes.img} src={img} />
      <div className={classes.grup_text}>
        <h4 className={classes.title}>XR-74 «Cooper»</h4>
        <div className={classes.description} >Brief description of the project,
              in a few lines.</div>
        <strong className={classes.price} >164 $/h</strong>
      </div>
    </li>
  )
}

export default VehicleItem