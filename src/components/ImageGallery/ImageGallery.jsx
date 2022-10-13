import UlStyled from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem';

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
