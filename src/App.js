import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import {Container} from './components/Styles/Container.styled'
import GlobalStyles from './components/Styles/Global';
import Content from './components/Content'
import Card from './components/Card';
import Footer from './components/Footer';

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
          {Content.map( (item,index) => (
            <Card key={index} item={item} />
            // <img src={ `./images/${item.image}`} alt="" />
          )  )}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
    
  );
}

export default App;
