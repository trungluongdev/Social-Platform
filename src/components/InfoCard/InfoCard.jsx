import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'

function InfoCard() {
  return (
   <div className="InfoCard">
    <div className="InfoHead">
      <h4>Your info</h4>
        <div>
          <UilPen width="2rem"
            height="1.2rem"
            // onClick={() => setModalOpened(true)}
            />
        </div>
    </div>
    <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Multan</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Zainkeepscode inst</span>
      </div>

      <button className="button logout-button">Logout</button>
   </div>
  )
}

export default InfoCard