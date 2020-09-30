import React, { Component } from "react";


class ImageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      caption: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addImage(this.state);
    this.setState({url: '', caption: ''});
  }

  render() {
    return(
      <form className='col-12 mb-5' onSubmit={this.handleSubmit}>
      <div className="form-group">
        <input type="text" className="form-control" id="url" name="url" value={this.state.url} onChange={this.handleInput} placeholder="Image URL" />
      </div>
      <div className="form-group">
        <textarea type="text" className="form-control" id="caption" name="caption" value={this.state.caption} onChange={this.handleInput} placeholder="Image Caption" />
      </div>
      <button type='reset' className='btn btn-primary mr-2'>Cancel</button>
      <button type='submit' className='btn btn-primary'>Add Image</button>
      </form>
    )
  }
};

export default ImageForm;
