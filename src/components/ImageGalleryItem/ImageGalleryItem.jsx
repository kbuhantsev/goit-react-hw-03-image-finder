import { LiStyled, ImgStyled } from './ImageGalleryItem.styled';

function ImageGalleryItem({ preview, description }) {
  return (
    <LiStyled>
      <ImgStyled src={preview} alt={description} />
    </LiStyled>
  );
}

export default ImageGalleryItem;
