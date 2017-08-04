import React from 'react';
import ReactDOM from 'react-dom';
import MommentItem from './MomentItem';



export default class MomentsList extends React.Component {
	constructor(){
		super()
	}
	render(){
		let momentsList = this.props.data.map((item,index)=>{
			return (
				<li key={index}>
				<MommentItem momentData={item} />
			</li>
				)
			
		})
		return (<div><ul>{momentsList}</ul></div>)
	}
}