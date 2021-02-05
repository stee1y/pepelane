import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchVehicles } from '../../store/actions/vehicles'
import imgCup from '../../image/cup.svg'
import imgPilot from '../../image/pilot.svg'
import imgMarvinMcKinney from '../../image/Marvin McKinney.jpg'
import imgSavannahNguyen from '../../image/Savannah Nguyen.jpg'
import imgCourtneyHenry from '../../image/Courtney Henry.jpg'


import classes from './Vehicle.module.css'
import ErrorPage from '../ErrorPage/ErrorPage'

const Vehicle = (props) => {

  const [active, setActive] = useState(0)
  const items = ['Specifications', 'Team', 'Rent terms']
  const openTab = e => setActive(+e.target.dataset.index)

  const TabContent = ({specifications_text, team_text, term_text}) => {
    console.log()

    switch (active) {
      case 0:
        return (
          <div className={classes.specifications}>
            <h3 className={classes.specifications_title}>Features:</h3>
            <ul className={classes.specifications_list}>
              <li className={classes.specifications_list__item}>
                <div className={classes.specifications_image}>
                  <img alt='icon' src={imgCup}/>
                </div>
                <div>
                  <h4 className={classes.specifications_list__title}>A challenge for a true champion</h4>
                  <p className={classes.specifications_list__text}>{specifications_text}</p>
                </div>
              </li>
              <li className={classes.specifications_list__item}>
                <div className={classes.specifications_image}>
                  <img alt='icon' src={imgPilot}/>
                </div>
                <div>
                  <h4 className={classes.specifications_list__title}>Pilot's sweaty hands</h4>
                  <p className={classes.specifications_list__text}>{specifications_text}</p>
                </div>
              </li>
            </ul>
          </div>
        )
      case 1:
        return (
          <div className={classes.team}>
            <h3 className={classes.team_title}>Qualified specialists</h3>
            <ul className={classes.team_list}>
              <li className={classes.team_list__item}>
                <div className={classes.team_image}>
                  <img alt='Marvin McKinney' src={imgMarvinMcKinney}/>
                </div>
                <div>
                  <h4 className={classes.team_list__title}>Marvin McKinney</h4>
                  <div className={classes.team_list__subtitle}>Pilot assistant</div>
                </div>
              </li>
              <li className={classes.team_list__item}>
                <div className={classes.team_image}>
                  <img alt='Savannah Nguyen' src={imgSavannahNguyen}/>
                </div>
                <div>
                  <h4 className={classes.team_list__title}>Savannah Nguyen</h4>
                  <div className={classes.team_list__subtitle}>Mechanic</div>
                </div>
              </li>
              <li className={classes.team_list__item}>
                <div className={classes.team_image}>
                  <img alt='Courtney Henry' src={imgCourtneyHenry}/>
                </div>
                <div>
                  <h4 className={classes.team_list__title}>Courtney Henry</h4>
                  <div className={classes.team_list__subtitle}>Stewardess</div>
                </div>
              </li>
            </ul>
            <p className={classes.team_list__text}>{team_text}</p>
          </div>
        )
      case 2:
        return (
          <div className={classes.terms}>
            <h3 className={classes.terms_title}>Additional conditions:</h3>
            <ul className={classes.terms_list}>
              <li className={classes.terms_list__item}>
                {term_text}
              </li>
              <li className={classes.terms_list__item}>
                {term_text}
              </li>
              <li className={classes.terms_list__item}>
                {term_text}
              </li>
            </ul>
          </div>
        )
    
      default:
        return (
          <div>
            error
          </div>
        )
    }
  }


  const vehicleId = props.match.params.id
  const vehicleType = props.match.params.type
  const vehicleName = props.match.params.name

  const isItEmptyArr = !!props.vehiclesList.vehicles.length

  const [vehicle, setVehicle] = useState({})

  useEffect(() => {
    if (!isItEmptyArr) { props.fetchVehicles() }
    if (isItEmptyArr) { getVehicle(props) }
  })

  function getVehicle(props) {

    let x = props.vehiclesList.vehicles.length  // проверка наличия карточки через url

    props.vehiclesList.vehicles.find((element) => {

        x = x - 1
      if (element.id.toLowerCase() === vehicleId && element.type.toLowerCase() === vehicleType && element.name.toLowerCase() === vehicleName) {

        x = x + 1
        setVehicle(element)
        return false
      }
      
      if (x <= 0) {
        props.history.push('/error')
      }
      
      return false
    })
    
    return 
  }

  return (
    < >
      {props.loading && !isItEmptyArr && Object.keys(vehicle).length
        ?  <ErrorPage/>
        : (
          <div className={classes.vehicle}>
            <div className={classes.img}>
              <img alt={vehicle.name} src={vehicle.image} />
            </div>
            <div>
              <h2 className={classes.title}>{vehicle.name}</h2>
              <ul className={classes.tabList}>
                  {items.map((item, index) => (
                    <li className={classes.tabItem} key={index}>
                      <button
                      className={`${index === active ? classes.active : ''}`}
                      onClick={openTab}
                      data-index={index}
                    >{item}</button>
                    </li>
                  ))}
              </ul>
              <p>{vehicle.description}</p>
              <TabContent {...vehicle}/>
              <div className={classes.rent_block}>
                <div className={classes.rent}>Rent for <span>{vehicle.rent} $/h</span></div>
                <button className={classes.rent_btn}>Rent now</button>
              </div>
            </div>
            
          </div>
      )
    }
    </>
  )
}

function mapStateToProps(state) {
  return {
    vehiclesList: state.vehiclesList,
    loading: state.vehiclesList.loading
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchVehicles: () => dispatch(fetchVehicles())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Vehicle))