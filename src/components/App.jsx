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
import { Box } from './Box';

const API = new ApiPixabay();

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class App extends Component {
  state = {
    pictures: [],
    loadMoreEnabled: false,
    status: 'idle',
  };

  onSearch = async ({ text }) => {
    this.setState({ status: Status.PENDING });

    API.query = text;
    API.resetPage();
    try {
      const { hits, totalHits } = await API.getImages();
      if (!hits.length) {
        this.setState({ status: Status.REJECTED });
        return;
      }
      this.setState({
        pictures: hits,
        loadMoreEnabled: hits.length < totalHits,
        status: Status.RESOLVED,
      });
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
      this.setState({ status: Status.REJECTED });
    }
  };

  onLoadMoreButtonClick = async () => {
    this.setState({ status: Status.PENDING });
    try {
      const { hits, totalHits } = await API.getImages();
      this.setState(
        state => ({
          pictures: [...state.pictures, ...hits],
          loadMoreEnabled: state.pictures.length + hits.length < totalHits,
          status: Status.RESOLVED,
        }),
        this.scrollDown
      );
    } catch (error) {
      this.setState({ status: Status.REJECTED });
    }
  };

  scrollDown = () => {
    window.scrollBy({
      top: window.screen.availHeight / 4,
      behavior: 'smooth',
    });
  };

  render() {
    const { pictures, loadMoreEnabled, status } = this.state;

    let markup = '';

    if (status === Status.IDLE) {
      markup = (
        <Box as="h2" margin="0 auto">
          <p>Давайте начнем что-то искать 👀</p>
        </Box>
      );
    } else if (status === Status.PENDING) {
      markup = (
        <>
          <ImageGallery galleryItems={pictures} />
          <Loader />
        </>
      );
    } else if (status === Status.RESOLVED) {
      markup = (
        <>
          <ImageGallery galleryItems={pictures} />
          {loadMoreEnabled && <Button onClick={this.onLoadMoreButtonClick} />}
        </>
      );
    } else if (status === Status.REJECTED) {
      markup = (
        <Box as="h2" margin="0 auto">
          <p>❗Что-то пошло не так, попробуйте еще раз</p>
        </Box>
      );
    }
    return (
      <>
        <GlobalStyles />
        <Container>
          <Searchbar onSearch={this.onSearch} />
          {markup}
          <ToastContainer />
        </Container>
      </>
    );
  }
}

export default App;
