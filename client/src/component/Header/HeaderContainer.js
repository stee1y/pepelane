import React, { useState, useEffect } from 'react'
import Header from './Header';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import classes from './Header.module.css';
import { changeEmail, changePassword, submitForm } from './../../store/actions/login';



const HeaderContainer = (props) => {

  const [modalIsOpen, setIsOpen] = useState(true)

  const [isLoading, setIisLoading] = useState(false)
  
  const [user, setUser] = useState({email: 'qqwe', password: 'qwe', firstName: '121212', lastName: '2222222'})

  const [userId, setUserId] = useState(1)
  // const [email, setEmail] = useState(()=>'')
  // const [password, setPassword] = useState('')


  // useEffect(() => {
  //   console.log('aaa')
  // })

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    let loggedIn = user.loggedIn

    if (loggedIn) {
      closeModal()
      console.log(user)
    }
    console.log("Введите верные данные")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(user => ({ ...user, [name]: value }));
    
  }

  const heandlerClear = (e) => {
    e.preventDefault()
    setUser({email: '', password: ''})
  }

  const login = () => {
    
  }

  const logout = () => {
    
  }

  return (
    <Header classes={classes} 
      user={user} 
      userId={userId} 
      isLoading={isLoading} 
      modalIsOpen={modalIsOpen} 
      openModal={openModal} 
      closeModal={closeModal} 
      login={login} 
      logout={logout}
      handleChange={handleChange}
      onSubmit={onSubmit}
      heandlerClear={heandlerClear}
    />
  )
}

function mapStateToProps(state) {
  
  return {
    ...state
  }
}

function mapDispatchProps(dispatch) {
  
  return {
    // submitForm: () => dispatch(submitForm()),
    // changePassword: (e) => dispatch(changePassword(e))
  }
}

export default compose(connect(mapStateToProps, {}, withRouter)(HeaderContainer))