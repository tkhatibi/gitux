import React from 'react'

// Material UI
import AppBar from 'material-ui/AppBar'

// components
import LoggedUserMenu from './LoggedUserMenu'
import LoginButton from './LoginButton'
import ToggleDrawerButton from './ToggleDrawerButton'

export default props => (
  <AppBar
    title="Gitux"
    onTitleTouchTap={()=>{}}
    iconElementRight={props.isLoggedIn ? <LoggedUserMenu /> : <LoginButton />}
    iconElementLeft={<ToggleDrawerButton />}
  />
)
