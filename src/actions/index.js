import axios from "axios"



export const USER_START = "USER_START";
export const ALBUMS_START = "ALBUMS_START";
export const PHOTOS_START = "PHOTOS_START";
export const PHOTO_START = "PHOTO_START";
export const POSTS_START = "POSTS_START";
export const POST_START = 'POST_START';
export const COMMENT_START = 'COMMENT_START'

export const ADD_USER = "ADD_USER";
export const ADD_ALBUMS = "ADD_ALBUMS";
export const ADD_PHOTOS = "ADD_PHOTOS";
export const ADD_POSTS = "ADD_POSTS";
export const ADD_PHOTO = "ADD_PHOTO";
export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT'

export const COMMENT_ERROR = 'COMMENT_ERROR'
export const POST_ERROR = 'POST_ERROR';
export const USER_ERROR = "USER_ERROR";
export const ALBUMS_ERRORS = "ALBUMS_ERRORS";
export const PHOTOS_ERRORS = "PHOTOS_ERRORS";
export const POSTS_ERROR = "POSTS_ERROR";
export const PHOTO_ERRORS = "PHOTO_ERRORS";





// POSTS_START
// PHOTO_ERRORS
// GET_POSTS
export const apiUrl = "https://jsonplaceholder.typicode.com";
export const getPosts = (id) => {
    return (dispatch) => {
        dispatch({
            type: POSTS_START
        })
        return axios.get(`${apiUrl}/posts?userId=${id}`)
            .then(response => {
                dispatch(postsdetails(response))
            })
            .catch(error => {
                dispatch({
                    type: POST_ERROR,
                    error
                })
            });
    };
};
const postsdetails = (res) => ({
    type: ADD_POSTS,
    data: res.data
})
export const getUser = (id) => {
    return (dispatch) => {
        dispatch({
            type: USER_START
        })
        return axios.get(`${apiUrl}/users/${id}`)
            .then(response => {
                dispatch(userdetails(response))
            })
            .catch(error => {
                dispatch({
                    type: USER_ERROR,
                    error
                })
            });
    };
};
const userdetails = (res) => ({
    type: ADD_USER,
    data: res.data
})
export const getAlbums = (id) => {
    return (dispatch) => {
        dispatch({
            type: ALBUMS_START
        })
        return axios.get(`${apiUrl}/albums?userId=${id}`)
            .then(response => {
                dispatch(albumdetails(response))
            })
            .catch(error => {
                dispatch({
                    type: ALBUMS_ERRORS,
                    error
                })
            });
    };
};
const albumdetails = (res) => ({
    type: ADD_ALBUMS,
    data: res.data
})
export const getphotos = (val) => {
    return (dispatch) => {
        dispatch({
            type: PHOTOS_START
        })
        // https://jsonplaceholder.typicode.com/photos?albumId=1
        return axios.get(`${apiUrl}/photos?albumId=${val}`)
            .then(response => {
                dispatch(photosdetails(response))
            })
            .catch(error => {
                dispatch({
                    type: PHOTOS_ERRORS,
                    error
                })
            });
    };
};
const photosdetails = (res) => ({
    type: ADD_PHOTOS,
    data: res.data
})

export const getPost = (val) => {
    return (dispatch) => {
        dispatch({
            type: POST_START
        })
        return axios.get(`${apiUrl}/posts/${val}`)
            .then(response => {
                dispatch(Postdetails(response))
            })
            .catch(error => {
                dispatch({
                    type: POST_ERROR,
                    error
                })
            });
    };
};
const Postdetails = (res) => ({
    type: ADD_POST,
    data: res.data
})
export const getComment = (val) => {
    return (dispatch) => {
        dispatch({
            type: COMMENT_START
        })
       // /comments?postId=1
        return axios.get(`${apiUrl}/comments?postId=${val}`)
            .then(response => {
                dispatch(Commentdetails(response))
            })
            .catch(error => {
                dispatch({
                    type: COMMENT_ERROR,
                    error
                })
            });
    };
};
const Commentdetails = (res) => ({
    type: ADD_COMMENT,
    data: res.data
})