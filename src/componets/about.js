import React, { Component, Fragment } from "react";
import Userpro from "./user";
import {
    getUser
} from '../actions'
import { connect } from 'react-redux'
import {
    Route,
    Link,
  } from 'react-router-dom';
class UserAbout extends Component {
    componentDidMount() {
     //   this.props.getUser(this.props.match.params.id);
    }
    render() {
        console.log(this.props)
        const { User } = this.props
        return (
            <Fragment>
                {User.loading ?
                    <div className="App">Loading...</div> :
                    <Fragment>
                        <Userpro user={User.data} />
                    </Fragment>}
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({

    getUser: (val) => dispatch(getUser(val))


})
const mapStateToProps = state => ({
    User: state.User
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserAbout) 