import { Component } from 'react';

class Searchbar extends Component {
  find = e => {
    e.preventDefault();
    this.props.callYouLater(e.target.input.value);
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.find}>
          <button type="submit" className="SearchForm-button">
            Search
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            name="input"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
