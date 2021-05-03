import React from 'react'
import logo from '../../image/logo.svg'
import nightMod from '../../image/nightMod.svg'
// import dayMod from '../../image/dayMod.svg'
import messages from '../../image/messages.svg'
import notification from '../../image/notification.svg'
import avatar from '../../image/avatar.jpg'
import Modal from 'react-modal'
import { NavLink } from 'react-router-dom'

Modal.setAppElement('#root')

const Header = (props) => {

  const classes = props.classes



  const onSubmit = (e) => {
    
    props.onSubmit(e)
  }

  const heandlerClear = (e) => {
    
    props.heandlerClear(e)
  }

  return (
    <header className={classes.header}>
      <NavLink to='/'>
        <img className={classes.logo} src={logo}/> 
      </NavLink>
      <h1 className={classes.title}>World's first affordable airsharing</h1>
      <div className={classes.wrap}>
      <div className={classes.theme}>
        <img className={classes.theme_image} src={nightMod}/>
        <span className={classes.theme_text} >Night mod</span>
      </div>
      <NavLink to='/masseges' className={classes.messages} activeClassName={classes.active}>
        <img className={classes.messages_img} src={messages}/>
      </NavLink>
      <NavLink to='/notification' className={classes.notification} activeClassName={classes.active}>
        <img className={classes.notification_img} src={notification}/>
      </NavLink>
      </div>
      <button className={classes.user_grup} onClick={props.openModal} value={props.userId}>
        {!props.user.name ? '' : <strong className={classes.user_name}>{props.user.name}</strong>}
        
          {!props.userId 
            ? 'Sign in' 
            : <div className={classes.user_avatar}>
                <img className={classes.user_avatar_img} src={avatar} />
              </div> 
          }
      </button>

      {!props.userId 
        ? <Modal isOpen={props.modalIsOpen } 
            onRequestClose={props.closeModal} 
            className={classes.modal} 
            overlayClassName={classes.overlay}>

            <form onSubmit={onSubmit} className={classes.login}>
              <input onChange={props.handleChange} autoFocus={true} placeholder='email' name='email' value={props.user.email}/>
              <input onChange={props.handleChange} placeholder='password' name='password' value={props.user.password}/>
              <button type='submit'>
                login
              </button>
              <button type='button'>
              Registration
              </button>
              <button type='reset' onClick={heandlerClear}>
              Clear
              </button>
            </form>
          </Modal>
        : <Modal isOpen={props.modalIsOpen} 
            onRequestClose={props.closeModal} 
            className={classes.modal} 
            overlayClassName={classes.overlay}>
              <div className={classes.login}>
                <div div>{props.user.firstName}</div>
                <div div>{props.user.lastName}</div>
              <button>Logout</button>
            </div>
          </Modal> }
        
        

    </header>
  )
}

export default Header