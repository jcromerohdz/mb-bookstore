import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';


const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 1000),
      title: '',
      category: categories[0]
    };
  }

  handleChage = (event) =>  {
    if (event.target.name === 'title') {
      this.setState({
        title: event.target.value
      });
    } else if (event.target.name === 'category') {
      this.setState({
        category: event.target.value
      });
    }
  };

  handleSubmit = (event) => {
    const { title } = this.state;
    const { createBook } = this.props;
    event.preventDefault();
    if (title) {
      createBook(this.state);
      this.reset();
    }
  }

  reset = () =>{
    this.setState({
      id: Math.ceil(Math.random() * 1000),
      title: '',
      category: categories[0]
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div>
        <form action="">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={this.handleChage}
          />
          <select
            name="category"
            id="cat"
            value={category}
            onChange={this.handleChage}
          >
            {categories.map(cat => (<option key={cat} value={cat}>{cat}</option>))}
          </select>
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

// const BookForm = () => (
//   <div>
//     <form action="">
//       <input type="text" placeholder="Title" />
//       <select name="category" id="cat">
//         {categories.map(cat => (<option key={cat} value={cat}>{cat}</option>))}
//       </select>
//       <input type="submit" value="Save" />
//     </form>
//   </div>
// );

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  }
});

export default connect(null, mapDispatchToProps)(BookForm);
