import UlStyled from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ galleryItems }) {
  return (
    <UlStyled>
      {galleryItems.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </UlStyled>
  );
}

export default ImageGallery;
