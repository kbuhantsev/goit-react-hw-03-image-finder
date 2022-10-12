import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';

function Container({ children }) {
  const theme = useTheme();
  return (
    <Box
      flexDirection="column"
      maxWidth={theme.breakpoints[0]}
      margin="0 auto"
      pl={theme.space[4]}
      pr={theme.space[4]}
    >
      {children}
    </Box>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
