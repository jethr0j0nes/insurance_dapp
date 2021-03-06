import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { drizzleReducers } from 'drizzle'
import userReducer from './user/userReducer'

const reducer = combineReducers({
  routing: routerReducer,
    user: userReducer,
  ...drizzleReducers
})

export default reducer
