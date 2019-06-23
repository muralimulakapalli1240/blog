import React, { Component, Fragment } from "react";
import {
    getPost, getComment
} from '../actions'
import Comments from './comment'
import { connect } from 'react-redux'
import {
    withRouter
} from 'react-router-dom';
class UserPost extends Component {
    componentDidMount() {
        this.props.getPost(this.props.match.params.postId);
        this.props.getComment(this.props.match.params.postId);
    }

    render() {

        const { Post, Comment } = this.props
        console.log(Post)
        return (
            <Fragment>
                {Post.loading ?
                    <div className="App">Loading...</div>
                    : (<Fragment>
                       
                        <div className="posts">
                        <h1>Post</h1>
                            <div className="post_body">
                                <div className="title">{Post.data.title}</div>
                                <p>{Post.data.body}</p>
                                {Comment.loading ?
                                    <div className="App">Loading...</div> :
                                    <Fragment> 
                                      <div className="comm"><h3>Comments</h3> <span>{Comment.data.length} Comments</span></div>  
                                        <Comments val={Comment.data}></Comments>
                                    </Fragment>}
                            </div>
                        </div>

                    </Fragment>)
                }
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getPost: (val) => dispatch(getPost(val)),
    getComment: (val) => dispatch(getComment(val))
})
const mapStateToProps = state => ({
    Comment: state.Comment,
    Post: state.Post
})
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPost))