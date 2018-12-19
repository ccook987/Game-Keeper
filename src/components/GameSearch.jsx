import React from 'react';
import { fetchGameTitle } from './../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../sass/main.scss';


function GameSearch({dispatch, id}){
  let input;
  return (
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
        <input className='search-input' placeholder="Search for a Game" ref={node => {
          input = node;
        }}>
        </input>
        <button>Search</button>
      </form>
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