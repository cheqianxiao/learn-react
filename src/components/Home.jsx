import React from 'react';
import ReactDOM from 'react-dom';
import MomentsList from './MomentsList';
import MomentEdit from './MomentEdit';
import data from '../data/momentslist.json'


export default class Home extends React.Component {

  render() {
    return (
      <div>
       <MomentEdit />
       <MomentsList data={data.data}/>
      </div>
    );
  }

}