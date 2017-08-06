import React from 'react';
import {connect} from 'react-redux'
import MommentItem from './MomentItem';

let MomentsList = ({list})=>(
	
	<ul>
	{list.map((moment)=>{
		<MommentItem {...moment}/>
	})}
	</ul>

)
const mapStateToProps = (state) => ({
  list: state.allmoments
})

MomentsList = connect(
  mapStateToProps
)(MomentsList)

export default MomentsList
