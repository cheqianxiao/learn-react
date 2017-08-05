import { combineReducers } from 'redux'
import allmoments from './allmoments'
import momentsFilter from './momentsFilter'

const todoApp = combineReducers({
  allmoments,
  momentsFilter
})

export default todoApp