import { combineReducers } from 'redux'
import allmoments from './allmoments'
import momentsFilter from './momentsFilter'

const NanNan = combineReducers({
  allmoments,
  momentsFilter
})

export default NanNan