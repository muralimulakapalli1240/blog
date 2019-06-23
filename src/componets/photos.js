import React, { Component, Fragment } from "react";
import {
    getphotos
} from '../actions'
import { connect } from 'react-redux'
// import {
//     Route,
//     Link
// } from 'react-router-dom';
class UserPhotos extends Component {
    componentDidMount() {
        this.props.getphotos(this.props.id);
    }

    render() {
        console.log(this.props)
        const { Photos } = this.props
        return (
            <Fragment>
                {Photos.loading ?
                    <div className="App">Loading...</div> :
                    <Fragment>
                        
                        <div className="posts">
                        <h1>Photos</h1>
                            {Photos.data.map(val =>
                                <div className="post" key={val.id}>
                                    <div className="img">
                                        <img src={val.url} alt=""></img>
                                    </div>
                                    <div className="title">{val.title}</div>
                                </div>
                            )}
                        </div>
                    </Fragment>}
                {/* 
                        <div className="main">
                            <Route exact path='/:id' component={() => <UserFeed id={this.props.match.params.id}></UserFeed>}></Route>
                        </div> */}
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({

    getphotos: (val) => dispatch(getphotos(val))


})
const mapStateToProps = state => ({
    Photos: state.Photos
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPhotos) 