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
      <h3>{props.name}</h3>
      <h3>{props.players}</h3>
      <h3>{props.max_players}</h3>
      <p>{props.description}</p>
    </div>;
    return (
      <div>
        {gameInformation}
      </div>
    );
  
}

export default connect()(GameItem);