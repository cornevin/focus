import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import { withRouter } from 'react-router-dom'


const style = {
  margin: 12,
}


class RoutingButton extends Component {
  constructor(props) {
    super(props)
    this.test = this.test.bind(this)
  }

  test() {
     this.props.history.push("/room");
  }

  render() {
    return (
      <div>
        <div onClick={this.test}>
           <RaisedButton label="Join the focus Room" labelColor="#FFFFFF" backgroundColor="#20855D" style={style} />
        </div>
      </div>
    )
  }
}


export default withRouter(RoutingButton)
