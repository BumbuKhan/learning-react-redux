import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostIndex extends Component {
  // this method is automatically called by React ONLY ONCE, BEFORE THE FIRST RENDER
  // NOT AT THE SUBSEQUENT RENDERS!!!
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    if(!this.props.posts.length) {
      return <div className="text-muted">No post yet</div>;
    }

    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <br />
        <div className="text-right">
          <Link to="/posts/new" className="btn btn-primary">
            + Add post
          </Link>
        </div>

        <br />
        <div>
          <h3>Posts</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {posts: state.posts.all};
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);
