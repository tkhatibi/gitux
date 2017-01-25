import React from 'react'

// Material UI
import {
  Card,
  CardActions,
  CardHeader,
  CardText,
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const Repository = props => (
  <Card>
    <CardHeader
      title={props.name}
      subtitle={props.owner.login}
      avatar={props.owner.avatar_url}
    />
    <CardText>
      {props.description}
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
)

export default Repository
