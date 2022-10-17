import UlStyled from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

function ImageGallery({ galleryItems }) {
  return (
    <UlStyled>
      {galleryItems.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </UlStyled>
  );
}

ImageGallery.propTypes = {
  galleryItems: PropTypes.array,
};

export default ImageGallery;
