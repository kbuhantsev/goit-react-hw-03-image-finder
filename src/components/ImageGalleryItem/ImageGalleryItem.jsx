import Modal from 'components/Modal/Modal';
import { Component } from 'react';
import { LiStyled, ImgStyled } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  render() {
    const { item } = this.props;
    const { webformatURL, tags } = item;
    const { isModalOpen } = this.state;
    return (
      <>
        <LiStyled>
          <ImgStyled
            src={webformatURL}
            alt={tags}
            onClick={this.openModal}
            loading="lazy"
          />
        </LiStyled>
        {isModalOpen && <Modal item={item} onClose={this.closeModal} />}
      </>
    );
  }
}

export default ImageGalleryItem;
