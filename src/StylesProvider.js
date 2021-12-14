import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { StyledEngineProvider } from '@mui/material/styles';
import darkTheme from '../src/darkTheme'
import lightTheme from '@availity/design-tokens/dist/presets/lightTheme'
import CssBaseline from '@mui/material/CssBaseline';

const StylesProvider = props => {
  const { children, mode } = props
  const theme = createTheme(lightTheme)
  return (
      <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline>{children}</CssBaseline>
          </ThemeProvider>
      </StyledEngineProvider>
  )
}

StylesProvider.propTypes = {
    children: PropTypes.any,
    mode: PropTypes.string,
}

StylesProvider.defaultProps = {
    theme: darkTheme
}

export default StylesProvider