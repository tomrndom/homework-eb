import React from 'react'

class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: 'Yourself',
      file: '',
      imagePreview: '',
      description: '',
      tag: '',
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let {imagePreview, description, tag, author} = this.state;
    let tags = tag.split(' ');
    this.props.createPost(imagePreview, description, tags, author);
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
    let { imagePreview, description, tag } = this.state;
    let $imagePreview = null;
    if (imagePreview) {
      $imagePreview = (<img src={imagePreview} />);
    }

    return (
      <div>        
        <form className="form-upload" onSubmit={this.handleSubmit}>
          <h2>Add new Post</h2>
          <label>Image</label><input type="file" onChange={this.handleImageChange} />
          <label>Description</label><input type="text" id="description" value={this.state.description} onChange={this.handleChange}></input>
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
