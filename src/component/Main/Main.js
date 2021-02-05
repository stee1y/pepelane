import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import VehicleList from '../VehicleList/VehicleList'
import classes from './Main.module.css'

const Main = (props) => {

  let type = !!props.match.params.type ? props.match.params.type : '/'

  useEffect(() => {
    type = !!props.match.params.type ? props.match.params.type : '/'
  })


  const [list, setList] = useState()

  const reducer = (accumulator, currentValue) => {
    if (currentValue.type === type) {

      return [...accumulator, currentValue]

    } else if (type === '/') {

      return [...accumulator, currentValue]
    }
    
    return accumulator
  }

  const handleChange = (event) => {
    props.history.push(event.target.value)
    const aaa = props.vehiclesList.vehicles.reduce(reducer, [])

    
    setList(aaa)
    console.log(type)
    // console.log(list)
  }

  const getSelect = () => {
    // props.vehiclesList.vehicles.reduce(reducer, [])
    if (props.vehiclesList.vehicles.length) {
      const types = ['all']
      props.vehiclesList.vehicles.map(element => {
        if (types.indexOf(element.type) === -1)  {
          types.push(element.type)
        }
        return types
      })

      return (
        <select value={type} onChange={handleChange}>
          {types.map((item, index) => <option  key={index} value={item === 'all' ? '/' : item}>{item}</option>)}
        </select>
      )
  }}

  




  return (
    <div>
    {!props
      ? <h1>aaa</h1>
      : <main className={classes.main}>
          <div className={classes.control_grup}>
            <h2 className={classes.title} >Rent 
              {getSelect()}
            </h2>
            <Link to='/' className={classes.add_item}>Add new <div className={classes.new_item_box}></div></Link>
          </div>
          {/* <VehicleList/> */}
        </main>}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    ...state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main))