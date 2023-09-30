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
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.setState({
        loader: true,
        forButtonloader: false,
      });

      request(this.state.query, this.state.page).then(galerry => {
        this.setState(prev => ({
          array: [...prev.array, ...galerry.hits],
          loader: false,
          forButtonloader: this.state.page < Math.ceil(galerry.totalHits / 12),
        }));
      });
    }
  }

  nextPage = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  callYouLater = word => {
    this.setState({
      query: word,
    });
  };

  openModal = imageURL => {
    this.setState(prev => ({
      modalOpen: !prev.modalOpen,
      imageURL: imageURL,
    }));
  };

  render() {
    const { array, forButtonloader, loader, modalOpen, imageURL } = this.state;
    return (
      <>
        <Searchbar callYouLater={this.callYouLater} />
        <ImageGallery obj={array} openModal={this.openModal} />
        {forButtonloader && <LoadMore nextPage={this.nextPage} />}
        {loader && <Loader />}
        {array.length > 0 && modalOpen && (
          <Modal img={imageURL} closeModal={this.openModal} />
        )}
      </>
    );
  }
}
