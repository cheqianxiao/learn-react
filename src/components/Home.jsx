import React from 'react';
import ReactDOM from 'react-dom';
import MomentsList from './MomentsList';
import data from '../data/momentslist.json'


export default class Home extends React.Component {

  render() {
    return (
      <div>

       <MomentsList data={data.data}/>
      </div>
    );
  }

}