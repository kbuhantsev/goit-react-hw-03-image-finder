import React, { Component } from 'react';
import Button from './Button/Button';
import Container from './Container';

import GlobalStyles from './GlobalStyles';
import ImageGallery from './ImageGallery/ImageGallery';
// import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import { galleryItems } from './gallery-items';
class App extends Component {
  state = {
    pictures: [],
  };

  onSearch({ text }) {
    console.log(text);
  }

  onGalleryItemClick({ idx }) {
    ///vmkrm
  }

  render() {
    //efqer
    return (
      <>
        <GlobalStyles />
        <Container>
          <Searchbar onSearch={this.onSearch} />
          <ImageGallery galleryItems={galleryItems} />
          <Button />
        </Container>
        {/* <Modal /> */}
      </>
    );
  }
}
export default App;
