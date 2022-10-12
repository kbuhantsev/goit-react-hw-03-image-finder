import UlStyled from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ galleryItems }) {
  return (
    <UlStyled>
      {galleryItems.map(({ preview, description }, idx) => (
        <ImageGalleryItem preview={preview} description={description} />
      ))}
    </UlStyled>
  );
}

export default ImageGallery;
