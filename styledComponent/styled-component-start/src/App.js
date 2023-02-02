import './App.css';
import logo from './logo.svg';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { StyledButton, SuperButton, SubmitButton, AnimatedLogo, DarkButton } from './component/button';



function App() {
  const theme={
    dark:{
      primary:'#000',
      text: '#fff',
    },
    light:{
      primary:'#fff',
      text: '#000',
    },
    font: 'Segoe UI'
  }
  
  const GlobalStyle = createGlobalStyle`
    button{
      //font-family: 'Roboto';
      font-family: ${(props)=> props.theme.font};
    }
  `
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div className="App">
        <AnimatedLogo src={logo}/>
        <StyledButton>Button 1</StyledButton>
        <div><br/></div>
      <StyledButton variant ='outline'>Button</StyledButton>
      <div><br/></div>
      <SuperButton as='a'>Super Stylish button</SuperButton>
      <div><br/></div>
      <SubmitButton variant='outline' onClick ={()=> console.log('button clicked')}>Submit</SubmitButton>
      <div><br/></div>
      <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
