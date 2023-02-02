import styled, {keyframes} from 'styled-components';

export const StyledButton = styled.button`
  display:block;
  cursor: pointer;
  border: 2px solid #41B883;
  border-radius: 4px;
  background:${({variant})=> variant === 'outline' ? '#fff' : '#4caf50'};
  text-decoration: none;
  text-align: center;
  color: ${({variant})=> variant === 'outline' ? '#4caf50' : '#fff'};
  font-weight: bold;
  margin: auto;
  padding: 20px 60px;
  margin-top:30px;
  font-size: 18px;
  width:300px;
  &:hover{
    background:${({variant})=> variant !== 'outline' ? '#fff' : '#4caf50'};
    color: ${({variant})=> variant !== 'outline' ? '#4caf50' : '#fff'};
  }
`
export const SuperButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #0081C7, #00D3B3, #00D3B3);
`

export const SubmitButton = styled(StyledButton).attrs({
  type:'submit'
})`
  display:block;
  cursor: pointer;
  border: 2px solid #41B883;
  border-radius: 4px;
  &:active{
    background:${({variant})=> variant === 'outline' ? '#fff' : '#4caf50'};
    box-shadow: 0 5px #00D3B3;
    transform: trasnlateY(4px);
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`

export const DarkButton = styled(StyledButton)`
  //border: 2px solid ${({theme: {dark:{primary}}})=> primary}
  border: 2px sollid ${(props)=> props.theme.dark.primary};
  background-color: ${(props)=> props.theme.dark.primary};
  text: ${(props)=> props.theme.dark.text};
`

