import React, { Component } from 'react';
import './App.css';

class ImageForm extends Component {
  render() {
    return(
      <form>
      </form>
    )
  }
};

class ImageList extends Component {
  render() {
    return (
      <ul>
      </ul>
    )
  }
}

class ImageBoard extends Component {
  render() {
    return (
      <div>
        <ImageForm />
        <ImageList />
      </div>
    )
  }
};

export default App  ;
