import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';

function Section({ title, children }) {
  const theme = useTheme();
  return (
    <Box
      as="section"
      flexDirection="column"
      pt={theme.space[5]}
      pb={theme.space[5]}
      bg={theme.colors.sectionBgColor}
    >
      {title && <h2>{title}</h2>}
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
