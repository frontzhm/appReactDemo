import React, { Component } from 'react';
import NoteList from './NoteList.js';

export default class Notes extends Component {
  render(){
    console.log('notes:', this.props.notes);

    return (
      <div>
        <p> 对{this.props.username}评论： </p>
        <NoteList notes={this.props.notes} />
      </div>
    )
  }
}
