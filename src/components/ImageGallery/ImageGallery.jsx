import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
class ImageGallery extends Component {
  show = ({ target }) => {
    if (target.tagName === 'IMG') {
      this.props.openModal(target.dataset.largeimg);
    }
  };
  render() {
    return (
      <ul className="ImageGallery" onClick={this.show}>
        {this.props.obj.map(a => {
          return <ImageGalleryItem obj={a} key={a.id} />;
        })}
      </ul>
    );
  }
}

export default ImageGallery;
