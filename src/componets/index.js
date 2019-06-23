import React, { Component, Fragment } from "react";
import Userpro from "./user";
import UserFeed from "./feed";
import UserAlbums from "./albums";
import UserPhotos from "./photos";
import UserPost from "./post";


import {
    getUser
} from '../actions'
import { connect } from 'react-redux'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
class Profile extends Component {
    componentDidMount() {
        if(!this.props.match.params.id)
        this.props.history.push("/1")
        else
        this.props.getUser(this.props.match.params.id);
    }
    render() {
        console.log(this.props)
        const { User } = this.props
        return (
            <Fragment>
                {User.loading ?
                    <div className="App">Loading...</div> :
                    <Fragment>
                        <aside>
                            <Userpro user={User.data} />
                            <ul>
                                <li>
                                    <Link to={`/${this.props.match.params.id}`}> Feed </Link>
                                </li>
                                <li>
                                    <Link to={`/${this.props.match.params.id}/albums`}> Albums </Link>
                                </li>
                                {/* <li>
                                <Link to="/team"> About </Link> https://jsonplaceholder.typicode.com/comments?postId=1
                            </li> */}
                            </ul>
                        </aside>
                        <div className="main">
                            <Switch>
                                <Route exact path='/:id' component={() => <UserFeed id={this.props.match.params.id}></UserFeed>}></Route>
                                <Route exact path='/:id/albums' component={() => <UserAlbums id={this.props.match.params.id}></UserAlbums>}></Route>
                                <Route exact path='/:id/albums/:albumId' component={() => <UserPhotos id={this.props.match.params.id}></UserPhotos>}></Route>
                                <Route exact path='/:id/post/:postId' component={() => <UserPost id={this.props.match.params.id}></UserPost>}></Route>
                            </Switch>
                        </div>


                        {/* <Route exact path='/about' component={UserAbout}></Route> */}
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
)(Profile) 