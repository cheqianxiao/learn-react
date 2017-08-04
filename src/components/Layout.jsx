import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import {Link} from 'react-router'
import { Button,Icon } from 'semantic-ui-react'

export default class Layout extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div  className="main">
          <div className="nav">
           <Button primary><Link to="/">主页</Link></Button>
           <Button primary><Link to="/me">我的</Link></Button>
          </div>
        {this.props.children}
      </div>
    );
  }

}

