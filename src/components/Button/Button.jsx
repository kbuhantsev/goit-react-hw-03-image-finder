import ButtonStyled from './Button.styled';

function Button({ onClick }) {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      Load more
    </ButtonStyled>
  );
}

export default Button;
