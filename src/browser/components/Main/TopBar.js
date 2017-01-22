import React from 'react'
import { connect } from 'react-redux'

// Material UI
import AppBar from 'material-ui/AppBar'

// components
import LoggedUserMenu from './LoggedUserMenu'
import LoginButton from './LoginButton'
import ToggleDrawerButton from './ToggleDrawerButton'

const TopBar = props => (
  <AppBar
    title="Gitux"
    onTitleTouchTap={()=>{}}
    iconElementRight={props.isLoggedIn ? <LoggedUserMenu /> : <LoginButton />}
    iconElementLeft={<ToggleDrawerButton />}
  />
)

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: state.auth.isLoggedIn,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
