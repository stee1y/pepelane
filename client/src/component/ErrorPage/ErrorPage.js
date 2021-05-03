import React from 'react'
import { Link } from 'react-router-dom'
import classes from './ErrorPage.module.css'

const ErrorPage = () => {

  return (
    <main className={classes.main}>
      <h2 className={classes.title} >An error has occurred</h2>
      <span className={classes.subtitle}>Please refresh the page</span>
      <Link to='/' className={classes.button}>Reload page</Link>
    </main>
  )
}

export default ErrorPage