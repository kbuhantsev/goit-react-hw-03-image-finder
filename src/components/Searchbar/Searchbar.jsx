import React from 'react';
import {
  HeaderStyled,
  SearchFormStyled,
  SearchBtnStyled,
  SearchInputStyled,
  ErrorMessageStyled,
} from './Searchbar.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FaSearch } from 'react-icons/fa';

const schema = Yup.object().shape({
  input: Yup.string().min(2, 'Min 2 letters!').required('Required!'),
});

function Searchbar({ onSearch }) {
  const handleSubmit = values => {
    const text = values.input;
    onSearch({ text });
  };

  return (
    <HeaderStyled>
      <Formik
        initialValues={{ input: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <SearchFormStyled name="search-form">
          <SearchBtnStyled type="submit">
            <FaSearch size="25px" />
          </SearchBtnStyled>

          <SearchInputStyled
            type="text"
            name="input"
            autoComplete="off"
            placeholder="Search images and photos"
          />
          <ErrorMessageStyled name="input" component="div" />
        </SearchFormStyled>
      </Formik>
    </HeaderStyled>
  );
}

export default Searchbar;
