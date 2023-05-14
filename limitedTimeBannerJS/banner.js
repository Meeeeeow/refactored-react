const banner = document.createElement('div');
banner.style.display ='flex';
banner.style.flexDirection = 'row';
banner.style.justifyContent = 'space-between';
banner.style.alignItems = 'center';
banner.style.background = 'linear-gradient(to right, #FFA500, #FFC0CB)';
banner.style.color = '#000';
banner.style.padding = '17px';
banner.style.textAlign = 'center';
banner.style.fontWeight = 'bold';
banner.style.borderRadius = '25px';

const iconContainer = document.createElement('div');
iconContainer.style.display='flex';
iconContainer.style.flexDirection='row';
iconContainer.style.alignItems = 'center';

const img = document.createElement('img')

img.src = './clock.png';
img.style.width = '24px';
img.style.height = '24px';


const iconText = document.createElement('span');
iconText.style.fontSize = '24px';
iconText.style.marginLeft = '0.5vw';
iconText.style.fontWeight = 'bold'; 
iconText.textContent='LIMITED TIME OFFER';

iconContainer.appendChild(img);
iconContainer.appendChild(iconText);




//  countdown timer
const countdown = document.createElement('span');
countdown.style.fontSize = '24px';
countdown.style.marginRight = '10px';



const codeContainer= document.createElement('div');
codeContainer.style.display='flex';
codeContainer.style.flexDirection='row';
codeContainer.style.justifyContent = 'space-between';

const code = document.createElement('span');
code.style.fontSize = '24px';
code.textContent="Get 10% OFF";
code.style.fontWeight='bold';
code.style.marginRight='1.5vw';

const codeSpan = document.createElement('span');
codeSpan.style.fontSize = '20px';
codeSpan.textContent='Use Code: ';
codeSpan.style.marginRight='0.9vw';

const codedText = document.createElement('span');
codedText.style.fontSize = '24px';
codedText.textContent='EXAMCODE';
codedText.style.fontWeight='bold';
codedText.style.marginRight='1.3vw';

codeContainer.appendChild(code);
codeContainer.appendChild(codeSpan);
codeContainer.appendChild(codedText);

// Add the countdown timer 
banner.appendChild(iconContainer);
banner.appendChild(countdown);
banner.appendChild(codeContainer);


// Insert banner into the DOM
document.body.appendChild(banner);


const countdownDuration = 1 * 60 * 1000; 

// Calculate the end date
const initialEndDate = new Date(new Date().getTime() + countdownDuration);

// Set the current end date of the offer to the initial end date
let endDate = initialEndDate;
// const remainingTimeReset = endDate - new Date().getTime();
// console.log(remainingTimeReset);
// Update the countdown timer every second
const updateCountdown = setInterval(() => {
  // Calculate the time remaining
  const now = new Date().getTime();
  let timeRemaining = endDate - now;
//   console.log(timeRemaining);
// console.log(endDate);
  // If the offer has ended, reset timer
  if (timeRemaining < 0) {
    endDate = now + countdownDuration;	
  }

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update countdown timer
  countdown.innerHTML = `Ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

//responsive design
const mediaQuery = window.matchMedia('(max-width: 768px)');
function handleMediaQueryChange(event) {
  if (event.matches) {
    banner.style.flexDirection = 'column';
    countdown.style.fontSize = '14px';
    countdown.style.margin = '10px 0';
    codedText.style.fontSize ='14px';
    codeSpan.style.fontSize = '12px';
    code.style.fontSize='14px';
    iconText.style.fontSize = '14px';

    iconText.style.borderBottom = '1px solid black';
    iconText.style.paddingBottom = '1.8vw';
    iconText.style.marginLeft = '10px';
  } else {
    banner.style.flexDirection = 'row';
    countdown.style.fontSize = '24px';
    countdown.style.margin = '0 10px 0 0';
    codedText.style.fontSize ='24px';
    codeSpan.style.fontSize = '20px';
    code.style.fontSize='24px';
    iconText.style.fontSize = '24px';


    iconText.style.borderBottom = 'none';
    iconText.style.paddingBottom = '0';
    iconText.style.marginLeft = '10px';
  }
}
mediaQuery.addListener(handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);