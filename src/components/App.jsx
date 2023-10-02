import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import request from './request';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMore from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
export class App extends Component {
  state = {
    page: 1,
    query: '',
    array: [],
    loader: false,
    forButtonloader: false,
    modalOpen: false,
    imageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.request(this.state.query, this.state.page);
    }
  }
  request = (query, page) => {
    request(query, page)
      .then(galerry =>
        this.setState(prev => ({
          array: [...prev.array, ...galerry.hits],
          forButtonloader: true,
          loader: false,
        }))
      )
      .catch(error => console.log(error));
  };

  nextPage = () => {
    this.setState(prev => ({
      page: prev.page + 1,
      forButtonloader: false,
      loader: true,
    }));
  };

  callYouLater = word => {
    this.setState({
      query: word,
      array: [],
      page: 1,
      loader: true,
    });
  };

  openModal = imageURL => {
    this.setState(prev => ({
      modalOpen: !prev.modalOpen,
      imageURL: imageURL,
    }));
  };

  render() {
    let { array, forButtonloader, loader, modalOpen, imageURL } = this.state;
    console.log(this.state.page);
    console.log(this.state.query);
    return (
      <>
        <Searchbar callYouLater={this.callYouLater} />
        <ImageGallery obj={array} openModal={this.openModal} />
        {forButtonloader && array.length > 11 && (
          <LoadMore nextPage={this.nextPage} />
        )}
        {loader && <Loader />}
        {array.length > 0 && modalOpen && (
          <Modal img={imageURL} closeModal={this.openModal} />
        )}
      </>
    );
  }
}
