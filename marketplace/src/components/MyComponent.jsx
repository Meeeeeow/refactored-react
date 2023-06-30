import Box from '@mui/material/Box';

import { styled, alpha } from '@mui/material/styles';




const Container = styled('div')({
  width: '200px',
  height: '200px',
  border: '2px solid black',
  borderRadius: '50%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
});

const CircularText = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '16px',
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  display: 'flex',
  flexDirection: 'column',

  '& span': {
    transformOrigin: 'center center',
    transitionProperty: 'transform',
    transitionDuration: '0.3s',
    transitionDelay: (props) => props.transitionDelay,
  },
}));

const MyComponent = () => {
  const text = 'LIVE AUCTION';
  const textLength = text.length;

  const renderCircularText = () => {
    const letters = text.split('');

    return letters.map((letter, index) => (
      <span
        key={index}
        style={{
          transform: `rotate(${(index * 180) / textLength}deg)`,
        }}
      >
        {letter}
      </span>
    ));
  };

  return (
    <Container>
      <CircularText
        transitionDelay={(index) => `${(index * 0.05).toFixed(2)}s`}
      >
        {renderCircularText()}
      </CircularText>
    </Container>
  );
};

export default MyComponent;