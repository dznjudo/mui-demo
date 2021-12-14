import StylesProvider from './StylesProvider'
import lightTheme from '@availity/design-tokens/dist/presets/lightTheme'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import Search from './Search'

const Header = styled.div`
  background: ${p => p.theme.palette.background.header};
  height: 56px;
  box-shadow: 0 2px 4px rgba(0,0,0,.24);
  border-bottom: 1px solid ${p => p.theme.palette.background.border};
`
const Canvas = styled.div`
  background: ${p => p.theme.palette.background.canvas};
  height: calc(100vh - 56px);
  margin: 0 auto;
  display: grid;
  align-items: top;
`
const Wrapper = styled(Paper)`
  width: 650px;
  display: grid;
  grid-template-rows: 40px 75px 1fr;
  grid-gap: 4px;
  align-items: flex-end;
  height: 300px;
  padding: 4px 16px 16px;
  margin: 40px auto 0;
`

const App = props => {
  const {theme} = props
  return (
    <StylesProvider mode={theme ? 'dark' : 'light'}>
      <ThemeProvider theme={lightTheme}>
        <Header>demo</Header>
        <Canvas>
          <Wrapper>
        <Typography gutterBottom component="div" variant="h6">Material-UI Theme Demo</Typography>
          <div>
            <Search />
          </div>
          <div style={{marginLeft: 'auto'}}>
            <Button sx={{mr: 1}} disableElevation disableRipple variant="contained" color="primary">
            Primary Themed Button
            </Button>
            <Button disableElevation disableRipple variant="outlined" color="secondary">
              Secondary Button
            </Button>
          </div>
          </Wrapper>
        </Canvas>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
