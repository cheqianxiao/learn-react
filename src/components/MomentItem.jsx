import React from 'react';
import ReactDOM from 'react-dom';
import { Button,Icon } from 'semantic-ui-react'


export default class MomentsList extends React.Component {
	constructor(){
		super()
	}
	_renderMomentHeader(data){
		return (
			<div>
			 <div  className="moment-header">
			    <a href="javascript:;">
			    	<img src={data.profile_photo} className="avator"/>
			    </a>
			 	<span>{data.nickname}</span>
			 </div>
		     <p  className="moment-content">{data.moment_content}</p>
		     </div>
			)
	}
	_renderMomentFooter(data){
		return (
			<div  className="moment-footer">

			 <Button><Icon name='empty heart' />{data.like_count}</Button>
		     <Button><Icon name='comment outline' />{data.comment_count}</Button>
		     <Button><Icon name='share' />{data.forward_count}</Button>
		     </div>
			)
	}
	render(){
		let data = this.props.momentData
			return (
				<div>
				 
				  {this._renderMomentHeader(data)}
				  <hr/>
				  {this._renderMomentFooter(data)}

				</div>
				)
			
	}
}