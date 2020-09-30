import React, { Component } from 'react';
import ImageForm from './ImageForm';
import ImageList from './ImageList';
import 'bootstrap/dist/css/bootstrap.min.css';




class ImageBoard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      images: [],
    }

    this.addImage = this.addImage.bind(this);
  }


  addImage(image) {
    const images = [...this.state.images];
    images.push(image)
    this.setState({ images });
  }

  componentDidMount() {
    const images = [{
      url: 'https://www.azamara.com/sites/default/files/heros/paros-greece-hero_1800x1000_1.jpg',
      caption: 'Paros, Greece'
    }]

    this.setState({ images })
  }
  render() {

    return (
      <div className='content'>
        <ImageForm addImage={this.addImage} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
};

export default ImageBoard;
