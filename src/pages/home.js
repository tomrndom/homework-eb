import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/post';

import {getFollowersPosts} from '../actions/post-actions';
import {followUser} from '../actions/user-actions';

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.props.getFollowersPosts()
  }

  render() {

    let {following, posts, loading} = this.props;

    return (
      <div className="home-container">
        <h1>Home</h1>
        {following.lenght > 0 ? posts.lenght > 0 ?
          posts.map(p => {
            return <Post post={p} follow={this.props.followUser} following={following}/>
          })                    
          :
          <span>There's no posts from the people you're currently following</span>
          :
          <span>You're currently not following anyone</span>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ userState, postState }) => ({
  loading: userState.loading,
  following: userState.following,
  posts: postState.followingPosts
})

export default connect(mapStateToProps, {getFollowersPosts, followUser})(HomePage);
