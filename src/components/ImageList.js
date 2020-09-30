import React, { Component } from 'react';


class ImageList extends Component {


  render() {

    const html = this.props.images.map((image, index) => (
      <div key={index}className="card mr-2" style={{width: '33%'}}>
        <img src={image.url} className='card-img-top' alt='#'/>
        <div className='card-body'>
          <p className='card-text'>{image.caption}</p>
        </div>
      </div>
    ))

    return (
      <ul className='col d-inline-flex'>{html}</ul>
    )
  }
}


export default ImageList;
