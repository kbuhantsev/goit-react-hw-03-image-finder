import Modal from '../Modal';
import { Component } from 'react';
import { LiStyled, ImgStyled } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => {
      return {
        isModalOpen: !prevState.isModalOpen,
      };
    });
  };

  render() {
    const { item } = this.props;
    const { webformatURL, tags } = item;
    const { isModalOpen } = this.state;
    return (
      <>
        <LiStyled>
          <ImgStyled
            loading="lazy"
            src={webformatURL}
            alt={tags}
            onClick={this.toggleModal}
          />
        </LiStyled>
        {isModalOpen && <Modal item={item} onClose={this.toggleModal} />}
      </>
    );
  }
}

export default ImageGalleryItem;
