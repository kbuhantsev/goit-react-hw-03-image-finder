import { ThreeDots } from 'react-loader-spinner';

function Loader({ isLoading }) {
  return (
    <ThreeDots
      height="60"
      width="60"
      radius="6"
      color="#3f51b5"
      visible={isLoading}
      wrapperStyle={{ justifyContent: 'center' }}
    />
  );
}

export default Loader;
