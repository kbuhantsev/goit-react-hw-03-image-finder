import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Button from './Button/Button';
import Container from './Container';

import GlobalStyles from './GlobalStyles';
import ImageGallery from './ImageGallery/ImageGallery';

import Searchbar from './Searchbar/Searchbar';
import ApiPixabay from './utils/ApiPixabay';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
      Notify.warning('Sorry, no results by ' + text);
      this.setState({
        pictures: hits,
        loadMoreEnabled: hits.length < totalHits || hits.length,
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onLoadMoreButtonClick = async () => {
    this.setState({ isLoading: false });
    try {
      const { hits, totalHits } = await API.getImages();
      this.setState(state => ({
        pictures: [...state.pictures, ...hits],
        loadMoreEnabled: state.pictures.length + hits.length < totalHits,
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(_, prevState) {
    if (prevState.pictures.length !== 0) {
      window.scrollBy({
        top: window.screen.availHeight / 4,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const { pictures, loadMoreEnabled, isLoading } = this.state;
    return (
      <>
        <GlobalStyles />
        <Container>
          <Searchbar onSearch={this.onSearch} />
          <ImageGallery galleryItems={pictures} />
          <ThreeDots
            height="60"
            width="60"
            radius="6"
            color="#3f51b5"
            visible={isLoading}
            wrapperStyle={{ justifyContent: 'center' }}
          />
          <Button
            enabled={loadMoreEnabled}
            onClick={this.onLoadMoreButtonClick}
          />
        </Container>
      </>
    );
  }
}
export default App;
