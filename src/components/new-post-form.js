import React from 'react'

class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreview: '',
      pictureInfo: '',
      tag: '',
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let {file, pictureInfo, tag} = this.state;
    this.props.createPost(file, pictureInfo, tag);
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];    

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreview: reader.result
      });
    }

    reader.readAsDataURL(file);
  }

  handleChange(event) {
    let {value, id} = event.target;    
    this.setState({[id]: value});
  }

  render() {
    let { imagePreview, pictureInfo, tag } = this.state;
    let $imagePreview = null;
    if (imagePreview) {
      $imagePreview = (<img src={imagePreview} />);
    }

    return (
      <div>        
        <form className="form-upload" onSubmit={this.handleSubmit}>
          <h2>Add new Post</h2>
          <label>Image</label><input type="file" onChange={this.handleImageChange} />
          <label>Description</label><input type="text" id="pictureInfo" value={this.state.pictureInfo} onChange={this.handleChange}></input>
          <label>Tags</label><input type="text" id="tag" value={this.state.tag} onChange={this.handleChange}></input>
          <button type="submit" onClick={this.handleSubmit}>Upload Image</button>
          <div className="picture-preview">
            {$imagePreview} 
          </div>
        </form>        
      </div>
    )
  }
}

export default NewPostForm;
