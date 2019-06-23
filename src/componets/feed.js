import React, { Component, Fragment } from "react";
import Userpro from "./user";
import {
    getPosts
} from '../actions'
import { connect } from 'react-redux'
import {
    Route,
    Link
} from 'react-router-dom';
class UserFeed extends Component {
    componentDidMount() {
        this.props.getPosts(this.props.id);
    }

    render() {
        const { Posts } = this.props
        console.log(this.props)
        return (
            <Fragment>
                {Posts.loading ?
                    <div className="App">Loading...</div> :
                    <Fragment>
                        
                        <div className="posts">
                        <h1>Feed</h1>
                            {Posts.data.map(val =>
                                <Link className="post" to={`/${this.props.id}/post/${val.id}`} key={val.id}>
                                      <div className="title">{val.title}</div>
                                        <p>{val.body}</p>
                                </Link>
                            )}
                        </div>
                    </Fragment>}
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getPosts: (val) => dispatch(getPosts(val))
})
const mapStateToProps = state => ({
    Posts: state.Posts
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserFeed) 