import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './../constants';

function GameItem(props){

  // function handleSavingSelectedTicket(ticketId){
  //   const { dispatch } = props;
  //   const action = {
  //     type: c.SELECT_TICKET,
  //     ticketId: ticketId
  //   };
  //   dispatch(action);
  // }

  const gameInformation =
    <div>
      <h4>{props.name}</h4>
      <p>{props.minplayers} - {props.maxplayers} players </p>
      <p>{props.minplaytime} - {props.maxplaytime} minutes </p>
      <img src={props.thumburl}/>
      <p>{props.descriptionpreview}</p>
    </div>;
    return (
      <div>
        {gameInformation}
      </div>
    );
  
}

export default connect()(GameItem);