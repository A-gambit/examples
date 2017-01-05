import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  button: {
    color: 'green'
  }
}

function Button(props) {
  const {classes} = props.sheet
  return <button className={classes.button}>My Button</button>
}

export default injectSheet(styles)(Button)
