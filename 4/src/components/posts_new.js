import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost, deletePost} from '../actions/index';
import {Link} from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(formData) {
    this.props.createPost(formData)
    .then(() => {
      this.context.router.push('/');
    })
  }

  render(){
    const {fields: {title, categories, content}, handleSubmit} = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h3>Create a new post</h3>
          <div className={`form-group ${title.touched && title.invalid ? 'has-danger': ''}`}>
            <label>Title</label>
            <input type="text" className="form-control" {...title}/>
            <div className="text-helper">
              {(title.touched) ? title.error : ''}
            </div>
          </div>
          <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger': ''}`}>
            <label>Categories</label>
            <input type="text" className="form-control" {...categories}/>
            <div className="text-helper">
              {(categories.touched) ? categories.error : ''}
            </div>
          </div>
          <div className={`form-group ${content.touched && content.invalid ? 'has-danger': ''}`}>
            <label>Content</label>
            <textarea type="text" className="form-control" {...content} />
            <div className="text-helper">
              {(content.touched) ? content.error : ''}
            </div>
          </div>

          <button className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-default">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter title';
  }

  if (!values.categories) {
    errors.categories = 'Enter categories';
  }

  if (!values.content) {
    errors.content = 'Enter content';
  }

  return errors;
}

// connect: 1st argument is mapStateToProps, 2nd - mapDispatchToProps
// reduxForm: 1st is formConfig, 2nd is mapStateToProps, 2nd - mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate,
}, null, {createPost})(PostsNew);
