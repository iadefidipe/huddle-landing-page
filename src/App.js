import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import {Container} from './components/Styles/Container.styled'
import GlobalStyles from './components/Styles/Global';

const theme = {
  colors:{
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
    paleCyan: 'hsl(193, 100%, 96%)',
    darkCyan: 'hsl(192, 100%, 9%)',
    grayishBlue: 'hsl(208, 11%, 55%)',
    pink: 'hsl(322, 100%, 66%)',
  }, 
  font : {
    poppins: `'Poppins', sans-serif `,
    openSans: `'Open Sans', sans-serif `,
  },
  tablet: '768px'

}

function App() {
  return (
    <ThemeProvider theme = {theme} >
      <>
      <GlobalStyles />
        <Header theme = {theme} />
        <Container>
          <h1> Hello world</h1>
        </Container>
      </>
    </ThemeProvider>
    
  );
}

export default App;
