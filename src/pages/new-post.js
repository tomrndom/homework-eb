import React from 'react';
import { connect } from 'react-redux';

import NewPostForm from '../components/new-post-form';
import {createPost} from '../actions/post-actions';

class NewPostPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {      
    };
    
  }

  

  render() {

    return (
      <div className="newPostContainer">
           <NewPostForm createPost={createPost}/>
      </div>
    )
  }
}

const mapStateToProps = ({ postState }) => ({
    loading: postState.loading
})

export default connect(mapStateToProps, {createPost})(NewPostPage);