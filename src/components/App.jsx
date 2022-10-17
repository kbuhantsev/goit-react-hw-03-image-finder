import React, { Component } from 'react';
import GlobalStyles from './GlobalStyles';

import Searchbar from './Searchbar';
import Container from './Container';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';

import ApiPixabay from './utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const API = new ApiPixabay();

class App extends Component {
  state = {
    pictures: [],
    loadMoreEnabled: false,
    isLoading: false,
  };

  onSearch = async ({ text }) => {
    this.setState({ isLoading: true });
    API.query = text;
    API.resetPage();
    try {
      const { hits, totalHits } = await API.getImages();
      if (!hits.length) {
        toast.warning('Sorry, no results by ' + text, { autoClose: 2000 });
      }
      this.setState({
        pictures: hits,
        loadMoreEnabled: hits.length < totalHits,
      });
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onLoadMoreButtonClick = async () => {
    this.setState({ isLoading: true });
    try {
      const { hits, totalHits } = await API.getImages();
      this.setState(
        state => ({
          pictures: [...state.pictures, ...hits],
          loadMoreEnabled: state.pictures.length + hits.length < totalHits,
        }),
        this.scrollDown
      );
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  scrollDown = () => {
    window.scrollBy({
      top: window.screen.availHeight / 4,
      behavior: 'smooth',
    });
  };

  render() {
    const { pictures, loadMoreEnabled, isLoading } = this.state;
    return (
      <>
        <GlobalStyles />
        <Container>
          <Searchbar onSearch={this.onSearch} />
          {pictures.length && <ImageGallery galleryItems={pictures} />}
          {isLoading && <Loader />}
          {loadMoreEnabled && <Button onClick={this.onLoadMoreButtonClick} />}
          <ToastContainer />
        </Container>
      </>
    );
  }
}

export default App;
