/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import categories from '../data/categories';

import '../styles/form.css';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 1000),
      title: '',
      category: categories[0],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'title') {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.name === 'category') {
      this.setState({
        category: e.target.value,
      });
    }
  }

  handleSubmit(e) {
    const { title } = this.state;
    const { createBook } = this.props;
    e.preventDefault();
    if (title) {
      createBook(this.state);
      this.reset();
    }
  }

  reset() {
    this.setState({
      id: Math.ceil(Math.random() * 1000),
      title: '',
      category: categories[0],
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-lg-6">
            <h4>ADD NEW BOOK</h4>
          </div>
        </div>
        <form className="form-row" onSubmit={this.handleSubmit}>
          <div className="col-lg-6 col-sm-12 mt-3">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="New Title"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-lg-3 col-sm-12 mt-3">
            <select
              className="custom-select mr-sm-2 form-control form-control-lg"
              id="inlineFormCustomSelect"
              name="category"
              value={category}
              onChange={this.handleChange}
            >
              {categories.map(category => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="col-lg-3 col-sml-12 mt-3">
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              SUBMIT
            </button>
          </div>
        </form>
        <footer>
          <div className="footerSpace" />
        </footer>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
