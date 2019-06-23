import React, { Component, Fragment } from "react";
import Userpro from "./user";
import {
    getAlbums
} from '../actions'
import { connect } from 'react-redux'
import {
    Route,
    Link
} from 'react-router-dom';
class UserAlbums extends Component {
    componentDidMount() {
        this.props.getAlbums(this.props.id);
    }

    render() {
        console.log(this.props)
        const { Albums } = this.props
        return (
            <Fragment>
                {Albums.loading ?
                    <div className="App">Loading...</div> : 
                    <Fragment>
                       
                        <div className="posts">
                        <h1>Albums</h1>
                            {Albums.data.map(val =>
                                <div className="post" key={val.id}>
                                    <Link to={`/${this.props.id}/albums/${val.id}`}> 
                                    <div className="img">
                                        <div className="image"></div>
                                        <div className="border"></div>
                                        <div className="border"></div>
                                    </div>
                                    <div className="title">{val.title}</div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </Fragment>}
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({

    getAlbums: (val) => dispatch(getAlbums(val))


})
const mapStateToProps = state => ({
    Albums: state.Albums
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserAlbums) 