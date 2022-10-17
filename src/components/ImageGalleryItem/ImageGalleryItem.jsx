import Modal from '../Modal';
import { Component } from 'react';
import { LiStyled, ImgStyled } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

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

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
  }),
};

export default ImageGalleryItem;
