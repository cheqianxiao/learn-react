import React from 'react';
import ReactDOM from 'react-dom';
import { Button,Icon } from 'semantic-ui-react'

const MomentItem = ({ nickname, profile_photo, content }) => (
  <li>
    <span>{nickname}</span>
    <span>{profile_photo}</span>
    <div>{content}</div>
  </li>
)

export default MomentItem
