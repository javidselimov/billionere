console.log('running');

const buttonMinus = document.querySelector('.button:first-child');
const buttonPlus = document.querySelector('.button:last-child');
const volumeContainer = document.querySelector('.volume-container');
const volumeBar = document.querySelector('.volume-bar');
const value = document.querySelector('.value');

let volumeBarWidth = 30;
let intervalId;

volumeBar.style.width = `${volumeBarWidth}%`;
value.innerText = `${volumeBarWidth}%`;

buttonMinus.addEventListener('mousedown', () => {
 intervalId= setInterval(()=>{
     if (volumeBarWidth > 0) {
       volumeBarWidth -= 1;
     }
       volumeBar.style.width = `${volumeBarWidth}%`;
       value.innerText = `${volumeBarWidth}%`;
  },100)

});
buttonMinus.addEventListener('mouseup',()=>{
    clearInterval(intervalId);
})
buttonPlus.addEventListener('mousedown', () => {
  intervalId = setInterval(() => {
    if (volumeBarWidth < 100) {
      volumeBarWidth += 1;
      volumeBar.style.width = `${volumeBarWidth}%`;
      value.innerText = `${volumeBarWidth}%`;
    }
  }, 100);
  
});

buttonPlus.addEventListener('mouseup', () => {
  clearInterval(intervalId);
});

volumeContainer.addEventListener('mouseover',(e)=>{
    let currentWidth = e.offsetX
    let maxWidth = volumeContainer.offsetWidth
    volumeBarWidth = Math.ceil(currentWidth*100/maxWidth)
    volumeBar.style.width = `${volumeBarWidth}%`;
    value.innerText = `${volumeBarWidth}%`;
})
volumeContainer.addEventListener('mousemove',(e)=>{
    let currentWidth = e.offsetX
    let maxWidth = volumeContainer.offsetWidth
    volumeBarWidth = Math.ceil(currentWidth*100/maxWidth)
    volumeBar.style.width = `${volumeBarWidth}%`;
    value.innerText = `${volumeBarWidth}%`;
})
