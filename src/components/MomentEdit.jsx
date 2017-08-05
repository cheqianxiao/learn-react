import React from 'react';
import ReactDOM from 'react-dom';
import { Form, TextArea, Button } from 'semantic-ui-react'


export default class MomentEdit extends React.Component {
	constructor(){
		super()
	}
	render(){
		return (
			<Form>
              <TextArea autoHeight placeholder='分享生活点滴' style={{ minHeight: 100 }} />
              <Button disabled>发布</Button>
           </Form>
			)
	}
}