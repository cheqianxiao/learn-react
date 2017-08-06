import React from 'react';
import ReactDOM from 'react-dom';
import MomentsList from './MomentsList';
import MomentEdit from './MomentEdit';
import LoadBtn from './LoadBtn';


export default class Home extends React.Component {

  render() {
    return (
      <div>
       <MomentEdit />
       <LoadBtn />
       <MomentsList/>
      </div>
    );
  }

}