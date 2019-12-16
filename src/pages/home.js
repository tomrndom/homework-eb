import React from 'react';
import { connect } from 'react-redux';

import Post from '../components/post';

import { getPosts } from '../actions/post-actions';

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    let {getPosts} = this.props;

    getPosts();
  }

  render() {

    let {loading, posts} = this.props;

    console.log('LOADING', loading);
    console.log('Posts', posts);

    return (
      <div className="home-container">        
        <Post />
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1><h1>Home Page</h1>
        <h1>Home Page</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ postState }) => ({
  loading: postState.loading,
  posts: postState.loading
})

export default connect(mapStateToProps, {getPosts})(HomePage);
