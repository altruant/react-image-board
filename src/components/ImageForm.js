import React, { Component } from "react";


class ImageForm extends Component {
  render() {
    return(
      <form>
      <div className="form-group">
        <input type="text" className="form-control" id="image-url" name="image-url" placeholder="Image URL"/>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" id="image-caption" name="image-caption" placeholder="Image Caption"/>
      </div>
      <button className='cancel'>Cancel</button>
      <button type='submit' className='add-img'>Add Image</button>
      </form>

    )
  }
};

export default ImageForm;
