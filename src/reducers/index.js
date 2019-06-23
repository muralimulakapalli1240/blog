import { combineReducers } from 'redux'
import {
    User,
    Albums,
    Photos,
    Post,
    Comment,
    Posts
} from './users'

export default combineReducers({
    User,
    Albums,
    Photos,
    Post,
    Comment,
    Posts
})