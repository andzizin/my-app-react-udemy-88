import React, {Component} from 'react';

import './post-list-item.scss';

export default class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      important: props.important || false,
      like: false
    };
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onImportant() {
    this.setState(state => ({
      important: !state.important
    }));
  }

  onLike() {
    this.setState(state => ({
      like: !state.like
    }));
  }

  render() {
    const {label, onDelete} = this.props;
    const {important, like} = this.state;
    let classNames = 'app-list-item d-flex justify-content-between';

    if (important) {
      classNames += ' important';
    }

    if (like) {
      classNames += ' like';
    }

    return (
      <div className={classNames}>
        <span 
        className="app-list-item-label"
        onClick={this.onLike}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button 
          type="button" 
          className="btn-star btn-sm"
          onClick={this.onImportant}>
            <i className="fas fa-star"></i>
          </button>
          <button 
          type="button" 
          className="btn-trash btn-sm"
          onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-heart"></i>
        </div>
      </div>
    )
  }
}
