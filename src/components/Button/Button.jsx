import ButtonStyled from './Button.styled';

function Button({ enabled, onClick }) {
  return (
    <ButtonStyled type="button" enabled={enabled} onClick={onClick}>
      Load more
    </ButtonStyled>
  );
}

export default Button;
