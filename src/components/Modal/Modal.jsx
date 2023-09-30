import { Component } from 'react';
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeEscape);
  }
  closeEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  backDropClose = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };
  render() {
    return (
      <div className="overlay" onClick={this.backDropClose}>
        <div className="modal">
          <img src={this.props.img} alt="" />
        </div>
      </div>
    );
  }
}
