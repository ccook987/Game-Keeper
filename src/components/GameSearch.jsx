import React from 'react';
import { fetchGameTitle } from './../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../sass/main.scss';
import GameList from './GameList';


function GameSearch({dispatch, id}){
  let input;
  
  return (
    <div>
    
    
    <div className='search-container'>
      <form className='search-form' onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          alert('Please Enter a Valid Search');
          return
        }
        dispatch(fetchGameTitle(input.value.trim()));
        input.value = '';
      }}>
      <h4>Enter Search Here:</h4>
        <input className='search-input' placeholder="Game Title" ref={node => {
          input = node;
        }}>
        </input>
        <button className='search-button'>Search</button>
      </form>
    </div>
    <GameList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    title: state.gameById,
    id: state.gameById,
    gameArray: state.gameById
  };
};

GameSearch.propTypes = {
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(GameSearch);