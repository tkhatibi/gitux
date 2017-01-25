import React from 'react'
import { connect } from 'react-redux'

// Material UI
import {
  Card,
  CardActions,
  CardHeader,
  CardText,
} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Chip from 'material-ui/Chip'

const Repository = props => (
  <Card style={{marginTop: 20}}>
    <CardHeader
      title={props.full_name}
      subtitle={props.private ? 'Private' : 'Public'}
      avatar={props.owner.avatar_url}
    />
    <CardText>
      {props.description}
      <p><b>Language : </b>{props.language}</p>
      <p><b>Last Update : </b>{props.updated_at}</p>
    </CardText>
    <CardActions>
      <RaisedButton
        label={`Star (${props.stargazers_count})`}
        disabled={!props.isLoggedIn}
        primary={true}
      />
      <RaisedButton
        label={`Fork (${props.forks_count})`}
        disabled={!props.isLoggedIn || !!props.fork}
        primary={true}
      />
      <RaisedButton
        label={`Issue (${props.open_issues_count})`}
        disabled={!props.isLoggedIn}
        primary={true}
      />
      <RaisedButton
        label={`Watch (${props.watchers_count})`}
        disabled={!props.isLoggedIn}
        primary={true}
      />
    </CardActions>
  </Card>
)

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: state.auth.isLoggedIn,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Repository)
