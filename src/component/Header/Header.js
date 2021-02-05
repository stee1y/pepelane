import React from 'react'
import logo from '../../image/logo.svg';
import nightMod from '../../image/nightMod.svg';
import dayMod from '../../image/dayMod.svg';
import messages from '../../image/messages.svg';
import notification from '../../image/notification.svg';
import avatar from '../../image/avatar.jpg'
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <header className={classes.header}>
      <NavLink to='/'>
        <img className={classes.logo} src={logo}/> 
      </NavLink>
      <h1 className={classes.title} >World's first affordable airsharing</h1>
      <div className={classes.wrap}>
      <div className={classes.theme} >
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
      <div className={classes.login_grup}>
        <strong className={classes.login_name}>Bessie Cooper</strong>
        <div className={classes.login_avatar}>
          <img className={classes.login_avatar_img} src={avatar} />
        </div>
      </div>
    </header>
  )
}

export default Header