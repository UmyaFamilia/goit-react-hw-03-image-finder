const ImageGalleryItem = ({ obj }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={obj.webformatURL}
        alt=""
        data-largeimg={obj.largeImageURL}
      />
    </li>
  );
};
export default ImageGalleryItem;
