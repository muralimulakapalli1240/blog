import {
    USER_START,
    ADD_USER,
    USER_ERROR,
    ALBUMS_START,
    ADD_ALBUMS,
    ALBUMS_ERRORS,
    PHOTOS_START,
    ADD_PHOTOS,
    PHOTOS_ERRORS,
    POSTS_START,
    ADD_POSTS,
    POSTS_ERROR,
    POST_START,
    ADD_POST,
    POST_ERROR,
    COMMENT_START,
    COMMENT_ERROR,
    ADD_COMMENT
} from '../actions'
const user = {
    loading: true,
    avg: 0,
    count: 0,
    data: [],
    error: null,
};
const posts = {
    loading: true,
    avg: 0,
    count: 0,
    data: [],
    error: null,
};
const albums = {
    loading: true,
    avg: 0,
    count: 0,
    data: [],
    error: null,
};
const comments = {
    loading: true,
    avg: 0,
    count: 0,
    data: [],
    error: null,
};
const post = {
    loading: true,
    avg: 0,
    count: 0,
    data: {},
    error: null
};
const photos = {
    loading: true,
    avg: 0,
    count: 0,
    data: [],
    error: null

};
export const User = (state = user, action) => {
    switch (action.type) {
        case USER_START:
            return {
                ...state,
                loading: true
            }
        case ADD_USER: {
            return {
                ...state,
                loading: false,
                data: action.data
            }
        }
        case USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}
export const Posts = (state = posts, action) => {
    switch (action.type) {
        case POSTS_START:
            return {
                ...state,
                loading: true
            }
        case ADD_POSTS: {
            return {
                ...state,
                loading: false,
                data: action.data
            }
        }
        case POSTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}
export const Albums = (state = albums, action) => {

    switch (action.type) {
        case ALBUMS_START: {
            return {
                ...state,
                loading: true
            }
        }
        case ADD_ALBUMS: {
            return {
                ...state,
                loading: false,
                data: action.data
            }
        }
        case ALBUMS_ERRORS: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        default:
            return state
    }
}
export const Photos = (state = photos, action) => {
    switch (action.type) {
        case PHOTOS_START: {
            return {
                ...state,
                loading: true
            }
        }
        case ADD_PHOTOS: {
            return {
                ...state,
                loading: false,
                data: action.data
            }
        }
        case PHOTOS_ERRORS: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        default:
            return state
    }
}
export const Post = (state = post, action) => {
    switch (action.type) {
        case POST_START: {
            return {
                ...state,
                loading: true
            }
        }
        case ADD_POST: {
            return {
                ...state,
                loading: false,
                data: action.data
            }
        }
        case POST_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        default:
            return state
    }
}
export const Comment = (state = comments, action) => {
    switch (action.type) {
        case COMMENT_START: {
            return {
                ...state,
                loading: true
            }
        }
        case ADD_COMMENT: {
            return {
                ...state,
                loading: false,
                data: action.data
            }
        }
        case COMMENT_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        default:
            return state
    }
}