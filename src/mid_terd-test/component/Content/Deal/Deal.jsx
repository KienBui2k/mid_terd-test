import React from 'react'
import './Deal.scss';
import RewTime from './RewTime'
export default function Deal() {
  return (
    <div className='deal__container'>
          <img src="../images/deal_ofthe_week.png" alt="" />
          <RewTime></RewTime>
    </div>
  )
}
