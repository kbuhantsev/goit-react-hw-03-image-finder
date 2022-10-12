import React from 'react';
import {
  HeaderStyled,
  SearchFormStyled,
  SearchBtnStyled,
  SearchBtnLabelStyled,
  SearchInputStyled,
  ErrorMessageStyled,
} from './Searchbar.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  input: Yup.string().min(3, 'Min 3 letters!').required('Required!'),
});

function Searchbar({ onSearch }) {
  const handleSubmit = (values, { resetForm }) => {
    const text = values.input;
    onSearch({ text });
    resetForm();
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
            <SearchBtnLabelStyled>Search</SearchBtnLabelStyled>
          </SearchBtnStyled>

          <SearchInputStyled
            type="text"
            name="input"
            autoComplete="off"
            placeholder="Search images and photos"
            autoFocus
          />
          <ErrorMessageStyled name="input" component="div" />
        </SearchFormStyled>
      </Formik>
    </HeaderStyled>
  );
}

export default Searchbar;
