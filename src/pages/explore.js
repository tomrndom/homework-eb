import React from 'react';
import { connect } from 'react-redux';
import Unsplash, { toJson } from 'unsplash-js';
import queryString from "query-string";

import Post from '../components/post';

import { getPosts } from '../actions/post-actions';
import { followUser } from '../actions/user-actions';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const UNSPLASH_SECRET = process.env.REACT_APP_UNSPLASH_SECRET;
const UNSPLASH_CALLBACK = process.env.REACT_APP_UNSPLASH_CALLBACK;

const unsplash = new Unsplash({
  accessKey: UNSPLASH_KEY,
  secret: UNSPLASH_SECRET,
  callbackUrl: 'http://localhost:3000/explore',
});

class ExplorePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      code: '',
    };
  }

  componentWillMount() {
    // let parsed = queryString.parse(this.props.location.search);
    // this.setState({code: parsed.code}, () => { console.log(this.state)});
  }

  componentDidMount() {
    
    // let {code} = this.state;
    
    // if(!code) {
    //   const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    //       "public"
    //     ]);
    //     window.location.assign(authenticationUrl);    
    // } else {
    //   unsplash.auth.userAuthentication(code)
    //   .then(toJson)
    //   .then(json => {
    //     console.log(json.access_token)
    //     unsplash.auth.setBearerToken(json.access_token);
    //   })
    //   .catch(err => console.log('Auth err', err));    
    // }       

    let {getPosts} = this.props;
    getPosts();
  }

  render() {

    let {loading, posts, following} = this.props;

    console.log('LOADING', loading);
    console.log('Posts', posts);

    return (
      <div className="explore-container">
        {posts.map(p => {
          return <Post post={p} follow={this.props.followUser} following={following}/>
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ postState, userState }) => ({
  loading: postState.loading,
  posts: postState.posts,
  following: userState.following
})

export default connect(mapStateToProps, {
  getPosts,
  followUser
})(ExplorePage);
