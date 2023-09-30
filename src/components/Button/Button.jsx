const LoadMore = props => {
  const showMore = () => {
    props.nextPage();
  };
  return (
    <div className="Button-cover">
      <button className="Button" onClick={showMore}>
        Load More
      </button>
    </div>
  );
};
export default LoadMore;
