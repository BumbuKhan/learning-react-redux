import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  deletePost() {
    this.props.deletePost(this.props.post.id)
    .then(() => {
      this.context.router.push('/');
    });
  }

  render() {
    if(!this.props.post) {
      return <div>Loading...</div>;
    }

    const {post} = this.props;

    return(
      <div>
        <br />
        <div>
          <Link to="/" clasName="btn btn-default">&larr; Back to list</Link>
          <button className="btn btn-danger" onClick={() => this.deletePost()} style={{'float': 'right'}}>Delete</button>
        </div>
        <h1>{post.title}</h1>
        <p>{post.categories}</p>
        <p>{post.content}</p>
      </div>)
  }
}

function mapStateToProps(state) {
  return {post: state.posts.post}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
