import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import {action} from '../actions/index.js'


let LoadBtn = ({onClick})=>{
	return <button onClick={onClick}>load</button>
}
const mapStateToProps = (state, ownProps) => ({
  active: state.momentFilter
})
const mapDispatchToProps = (dispatch,ownProps) => ({
  onClick: () => {
  	action()(dispatch)
  }
})

LoadBtn = connect(null,mapDispatchToProps)(LoadBtn)

export default LoadBtn
