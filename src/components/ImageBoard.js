import React, { Component } from 'react';
import ImageForm from './ImageForm';
import ImageList from './ImageList';
import 'bootstrap/dist/css/bootstrap.min.css';




class ImageBoard extends Component {
  render() {
    return (
      <div className='content'>
        <ImageForm />
        <ImageList />
      </div>
    )
  }
};

export default ImageBoard;
